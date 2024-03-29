---
title: 设计容错
icon: laptop-code
category:
  - 设计高频
tag:
  - 高频
---

## 简介
在某种程度上来说，软件的复杂性是应对无处不在的错误所带来的。要想在不可靠的硬件、软件和网络的基础上构建可靠的系统，容错是必不可少的。


## 错误源
要做到更好的容错、健壮和可靠，首先需要全面的梳理可能导致错误的源头和可能性。

要分析错误源头，则要首先分析应用及流程锁依赖的要素和环节。针对每一个要素和环节，推敲会出错的地方；要了解可预料到的错误，可以看看 Java 库或框架里的各种 Exception 。


#### 机器节点

* 磁盘故障、内存耗尽、CPU 100% 占用、掉电；

#### 网络

* DNS 故障、机架故障、路由器故障、设备故障、电缆故障；
* 连接中断、请求排队（延迟）、网络丢包、网络重传、网络拥塞、网络分区。

#### 时间

* 很多监控统计依赖于时钟；
* 数据最终一致性的操作依赖于到达先后顺序；
* 同一台机器的时钟晶振可能受温度影响而波动；
* 不同机器上的时钟是不一致的，通过 NTP 协议同步；
* NTP 协议是经过网络的，这意味着网络的不稳定会影响时钟的同步；
* “跳秒”现象：1 分钟有 59s 或 61s ；
* 任务耗时过长，对外部来说就是无响应。

#### 资源

* 资源不存在，比如文件不存在；
* 资源暂时不可用，比如端口已占用；
* 没有可用资源，比如连接池满；
* 资源路径已经被移动；
* 资源访问时的同步死锁。

#### 数据

* 不符合预期格式的数据；
* 脏数据引起解析错误；
* 不一致的数据引起后继行为错误；
* 大对象数据引起 FullGC 导致响应不稳定；
* 错误配置；
* 非法请求获得正常资源；
* 恶意代码。

#### 计算

* 溢出，不符合运算法则；
* 除零，无值可表示；
* 有限精度，浮点计算错误；
* 逻辑错误，比如越界、不正确的算法。

#### 设计

* 设计不足或不合理，容易令人疏忽而导致误操作；
* 危险操作无确认、无提示，容易造成损失；
* 少数服从多数原则，达不到多数；
* Leader 的消息无法被其它节点接收，被其它节点判定为下线。

#### 流程

* 中途取消操作；
* 逆向操作。

#### 负荷

* 大流量超出应用承受负荷。

#### 安全

* 非授权访问；
* 数据泄露；
* 数据被篡改；
* 访问拒绝。

#### 并发

* 数据覆写：访问一个共享资源时，进程 A 获取锁，然后进入了 stop-the-world GC pause ； 进程 B 发现锁已过期，然后申请获得锁，进行数据写操作，接着释放锁；进程 A 结束 GC，进行数据写操作。 进程 A 将 进程 B 的写数据覆盖了。

#### 拜占庭错误

* 当分布式系统里的节点要达成共识时，少数节点故意发送错误消息迷惑其它节点，以造成整体错误决策。比如航天领域防电子辐射干扰、多参与者协作和决策。

## 健壮性
健壮性是极为重要的程序质量属性。分为代码健壮性和业务健壮性。健壮性体现在代码和业务上的错误和异常处理上，避免整体失败、数据泄露、不一致、资损等故障。要做出健壮性好的设计和程序，就要预先思考清楚：流程中有哪些可能的错误和异常，每一种对应的处理措施是什么 ？ 这样，才能让逻辑思维更加缜密，也是锻炼逻辑思维的一种有效之法。

* 代码健壮性体现在避免局部失败导致整体失败。常见考虑：参数校验以拦截不合法请求、越界异常捕获、JSON 脏数据异常捕获、类型转换异常捕获、底层异常捕获（连接异常、DB 异常、网络超时异常等）。
* 业务健壮性体现在业务的闭合环。在整个业务过程中会发生什么异常，导致什么问题（体验或资损问题），如何处理。比如同城异常检测要考虑商家同城呼叫失败后又快递发货的情形。

## 容错机制
#### 思路与方法

* 设定系统假定，检测系统假定是否成立，然后在系统假定上构建系统；
* 聚焦高频错误：磁盘故障 > 服务器单机故障 > DNS 故障 > 机架故障 > 路由器重启；
* 错误提示规范：定义规范一致的错误码和错误消息；
* 快速失败并记录日志：适用于“请求检测，请求中含有错误或非法数据”的场景；
* 忽略失败并记录日志：适用于“不影响整体输出且不造成负面影响的极次要地方有点小问题”的场景；
* 确认机制：设计一种确认机制，确保交互的多方参与者满足某种契约或约束；
* 预防策略：避免容易导致错误的做法；
* 冗余策略：冗余、替换、路由，见高可用部分；
* 降级策略：当核心服务出现问题时，提供有损服务来维持稍低质量的服务，保证服务的可用性；
* 重试策略：幂等；完全重试；补偿重试；
* 回滚策略：中途取消，重续执行很容易导致脏数据，考虑回滚操作；
* 故障恢复：监控、检测错误和故障、自动恢复；
* 乐观锁：递增的 fencing token ，防止过期写操作覆盖已经完成的写操作；

#### 系统假定

* 同步模型假定：任何网络延迟、进程暂停、时钟错误都不可能超出某个上限值。即：有限的网络延迟；有限的进程暂停；有限的时钟错误。
* 部分同步模型假定：在同步模型假定的基础上，允许极少数的无法预测的超上限的网络延迟、进程暂停、时钟错误。
* 异步模型假定：对时序不做假定，难以预料事件何时发生和动作何时执行。
* 节点崩溃假定：节点突然失去响应，再也无法正常运行；
* 节点崩溃-恢复假定：节点可能在任何时候失去响应，在一段时间之后自动恢复并正常运行；易失性存储（比如内存）中的数据丢失，而持久性存储（比如磁盘）中的数据完好；
* 拜占庭假定：部分节点通过虚假消息欺骗其它节点，从而诱导作出错误的整体决策。


最常见的系统假定：部分同步模型假定 + 节点崩溃-恢复假定。


#### 算法的正确性

* 正确性假定：算法满足某些指定性质。
* 达成预期结果、安全、活性。

#### 重试

* 使操作满足幂等性质；
* 可以使用失败队列来记录失败的操作及失败信息、失败现场；
* 完全重试策略：整个操作从头开始执行，适合多读少写的长事务；
* 补偿重试策略：从失败现场的地方重续执行，适合多写且回滚代价昂贵的长事务；‘
* 完全重试策略，可指定重试次数；
* 可采用定时任务重试。
* 幂等：唯一索引、Token 机制（防页面重复提交）、分布式锁、select+insert、状态机幂等、查询/删除天然幂等。

#### 故障检测与恢复

* 故障检测主要靠监控。服务器监控（CPU、内存利用率、Load、IO RW、Net RW）、服务监控（RT、QPS、消费速率
* 、延迟、网络连接；来源、TOPN）、Java 监控（ThreadPool、Heap、GC 等）、异常监控（失败次数、失败比例；超时，消费堆积或不均）、业务监控（瞬时峰值、瞬时下跌、同比上涨或下跌、大数据对象）、对账监控（数据一致性检测，尤其资金相关）。
* 心跳机制：心跳机制用于故障检测。每台工作机每隔指定时间将自己的CPU、内存、磁盘、网络、IO读写、负载等情况上报给 Master， Master 会判断服务器是否正常，以决定是否分发流量给该服务器。每台服务器与 Master 有个超时设置，如果达到超时没有收到该服务器的心跳信息，则会判断服务器出现问题。心跳机制需要 KeepAlive （连接最大空闲时间） 属性，使用 MQTT 协议。
* 租约机制：每台工作机向 Master 申请具有一定租约期限的服务时间。当服务时间快到时，再向 Master 继续申请延长租约的有效期。如果因为网络或工作机故障导致租约无法响应，则会将该工作机隔离，不再提供服务。
* WAL（Write Ahead Log）： 预写日志，恢复日志。基本机理是复制状态机、备忘录、备份。关系数据库系统中用于提供原子性和持久性。in-place 和 shadow paging 。提升磁盘写性能：随机读写改顺序读写、缓冲单条读写改批量读写、单线程读写改并发读写。同步 WAL 文件和数据库文件的行为被称为 checkpoint（检查点）。实现方法：DB - undo, redo 机制；ES - fsync 机制；ZK - 先写 WAL，再更新内存，最后通知客户端；定期将内存中的目录树进行 Snapshot，落磁盘； ETCD - wal 和 snap 目录； HBase - 更新数据前写 WAL， 且写 WAL 与数据更新在同一事务。
* 检查点（CheckPoint）：系统定期将内存状态以检查点文件的形式dump到磁盘中，并记录检查点时刻对应的操作日志回放点。 检查点可以快速提升故障恢复的速度。
* 备份。备份是应对数据故障（丢失、不一致）的重要保障。备份只是实现数据的恢复，并不能完全实现故障恢复。故障恢复是指服务或服务器回到正常可用状态。

#### MySQL备份

* 逻辑备份和物理备份。逻辑备份是可读文件、恢复简单灵活（恢复工具及选项）、在不同机器上运行、与存储引擎无关、避免物理环境导致的数据损坏，但恢复时间较长，需要
  MySQL 来完成、需要测试恢复；物理备份通常是不可读的二进制文件，恢复更简单（只要拷贝文件到目的路径）、恢复时间很短，但 InnoDB
  的原始文件通常比逻辑备份的文件更大。两种方式可混合。

