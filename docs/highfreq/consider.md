---
title: 设计考量
icon: laptop-code
category:
  - 设计高频
tag:
  - 高频
---

## 简介

## 1、系统拆分

有句古话 “牵一发而动全身”。

面对一个庞然大物，如果没有一个合理的分工分层。任何一个小小失误都会被无限放大，酿成巨大灾难。

万物相通，回到我们的软件架构。

早前的系统都是单体系统，比如电商业务，会员、商品、订单、物流、营销等模块都堆积在一个系统。每到节假日搞个大促活动，系统扩容时，一扩全扩，一挂全挂。只要一个接口出了问题，整个系统都不可用。

“鸡蛋不能放在一个篮子里”，这种连带风险换谁都承受不起。

因此，系统拆分 成了更多人的选择。

慢慢的就有了我们现在看到的微服务架构，将一个复杂的业务域按核心边缘业务/DDD的思想拆分成若干子系统，每个子系统负责专属的业务功能，做好垂直化建设，各个子系统之间做好边界隔离，降低风险蔓延。

## 2、解耦

软件开发有个重要原则“高内聚、低耦合”。

小到接口抽象、MVC 分层，大到 SOLID 原则、23种设计模式。核心都是降低不同模块间的耦合度，避免一处错误改动影响到整个系统。

就以开闭原则为例，对扩展是开放的，对修改是关闭的。随着业务功能迭代，如何做到每次改动不对原来的旧代码产生影响。

高内聚，低耦合方案（解耦方案）：

动态代理技术，通过对字节码进行增强，在方法调用的时候进行拦截，以便于在方法调用前后，增加我们需要的额外处理逻辑。

事件机制，通过发布订阅模式，新增的需求，只需要订阅对应的事件通知，针对性消费即可。不会对原来的代码侵入性修改，是不是会好很多。

队列，将消息丢往队列，消费者消费消息，提高可扩展性，性能

## 3、异步

同步指一个进程在执行请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去。

效率会大大降低，聪明的人想到了 异步 方式。

如果是非实时响应的动作可以采用异步来完成，线程不需要一直等待，而是继续执行后面的逻辑。

如：线程池（ThreadPoolExecutor）、规则推送、消息队列 等都是这个原理

比如一个用户在淘宝下了一笔购物订单，关心的是订单是否创建成功，能否进行后续的付款流程

至于其他业务动作，如短信通知、邮件通知、生成订单快照、创建超时任务记录，这些非核心动作用户并不是特别关心。

我们可以采用消息队列的发布/订阅 机制，数据库插入订单记录后，发布一条消息到 MQ，然后就可以告知用户下单成功。

其他事情，由不同的 Task 任务订阅消息异步处理，彼此间互不干扰。

## 4、重试

重试主要是体现在远程的RPC调用，受 网络抖动、线程资源阻塞 等因素影响，请求无法及时响应。

为了提升用户体验，调用方可以通过 重试 方式再次发送请求，尝试获取结果。比过：浏览器的 F5 刷新机制就是类似道理。

接口重试是一把双刃剑，虽然客户端收到了响应超时结果，但是我们无法确定，服务端是否已经执行完成。如果盲目地重试，可能会带来严重后果。比如：银行转账。

重试通常跟幂等组合使用，如果一个接口支持了 幂等，那你就可以随便重试

1、幂等性概念

顾名思义，所谓幂等就是对于数据的操作不论多少次，但始终操作的结果是一致的。也就是说，无论相同的查询操作多少次，得到结果始终只是一次的结果和影响。

**保证幂等方案**

#### 1、查询操作：查询一次和查询多次，在数据不变的情况下，查询结果是一样的。select是天然的幂等操作；

#### 2、删除操作：删除操作也是幂等的，删除一次和多次删除都是把数据删除。(注意可能返回结果不一样，删除的数据不存在，返回0，删除的数据多条，返回结果多个) ；

#### 3、唯一索引：防止新增脏数据。比如：支付宝的资金账户，支付宝也有用户账户，每个用户只能有一个资金账户，怎么防止给用户创建资金账户多个，那么给资金账户表中的用户ID加唯一索引，所以一个用户新增成功一个资金账户记录。要点：唯一索引或唯一组合索引来防止新增数据存在脏数据（当表存在唯一索引，并发时新增报错时，再查询一次就可以了，数据应该已经存在了，返回结果即可）；

#### 4、token机制（防止重复提交）

方式一：

原理上通过session token来实现的(也可以通过redis来实现)
。当客户端请求页面时，服务器会生成一个随机数Token，并且将Token放置到session当中，然后将Token发给客户端（一般通过构造hidden表单）。下次客户端提交请求时，Token会随着表单一起提交到服务器端。

服务器端第一次验证相同过后，会将session中的Token值更新下，若用户重复提交，第二次的验证判断将失败，因为用户提交的表单中的Token没变，但服务器端session中Token已经改变了。

方式二：

调用方在调用接口时候先向后端请求一个全局ID（Token），请求的时候携带全局ID一起请求，后端需要用这个Token作为Key，用户信息作为Value到Redis中进行键值内容校验，如果Key存在且Value匹配就执行删除命令，然后执行后面的业务逻辑。如果不存在对应的Key或者Value不匹配就返回执行错误的信息。

![img_2.png](img_2.png)
方式三：

请求每次访问时候，会记录当前请求相同参数，url的信息，访问时间，到期时间等放入redis，定义一个一定时间内防止重复处理的时间间隔，如果下次请求来的时候，通过url，参数等信息获取redis中的请求信息，如果redis中记录的访问时间小于上次请求时间+固定的时间间隔，就不允许访问。

#### 5、乐观锁

乐观锁只是在更新数据那一刻锁表，其他时间不锁表，所以相对于悲观锁，效率更高。乐观锁的实现方式多种多样可以通过version或者其他状态条件：
![img_3.png](img_3.png)

#### 6、分布式锁

如果是分布式系统，构建全局唯一索引比较困难，例如唯一性的字段没法确定，这时候可以引入分布式锁，通过第三方的系统(
redis或zookeeper)
，在业务系统插入数据或者更新数据，获取分布式锁，然后做操作，之后释放锁，这样其实是把多线程并发的锁的思路，引入多多个系统，也就是分布式系统中得解决思路。要点：某个长流程处理过程要求不能并发执行，可以在流程执行之前根据某个标志(
用户ID+后缀等)
获取分布式锁，其他流程执行时获取锁就会失败，也就是同一时间该流程只能有一个能执行成功，执行完成后，释放分布式锁(
分布式锁要第三方系统提供)；

#### 7、select + insert

并发不高的后台系统，或者一些任务JOB，为了支持幂等，支持重复执行，简单的处理方法是，先查询下一些关键数据，判断是否已经执行过，在进行业务处理，就可以了。注意：核心高并发流程不要用这种方法；

#### 8、状态机幂等

在设计单据相关的业务，或者是任务相关的业务，肯定会涉及到状态机(状态变更图)
，就是业务单据上面有个状态，状态在不同的情况下会发生变更，一般情况下存在有限状态机，这时候，如果状态机已经处于下一个状态，这时候来了一个上一个状态的变更，理论上是不能够变更的，这样的话，保证了有限状态机的幂等。注意：订单等单据类业务，存在很长的状态流转，一定要深刻理解状态机，对业务系统设计能力提高有很大帮助

#### 9、对外提供接口的api如何保证幂等

如银联提供的付款接口：需要接入商户提交付款请求时附带：source来源，seq序列号；source+seq在数据库里面做唯一索引，防止多次付款(
并发时，只能处理一个请求) 。

重点：对外提供接口为了支持幂等调用，接口有两个字段必须传，一个是来源source，一个是来源方序列号seq，这个两个字段在提供方系统里面做联合唯一索引，这样当第三方调用时，先在本方系统里面查询一下，是否已经处理过，返回相应处理结果；没有处理过，进行相应处理，返回结果。注意，为了幂等友好，一定要先查询一下，是否处理过该笔业务，不查询直接插入业务系统，会报错，但实际已经处理了。

## 5、补偿

我们知道不是所有的请求都能收到成功响应。除了上面的 重试 机制外，我们还可以采用补偿玩法，实现数据最终一致性。

业务补偿根据处理的方向分为两部分：

* 正向。多个操作构成一个分布式事务，如果部分成功、部分失败，我们会通过最大努力机制将失败的任务推进到成功状态
* 逆向。同上道理，我们也可以采用反向操作，将部分成功任务恢复到初始状态

注意：补偿操作有个重要前提，业务能接受短时间内的数据不一致。

补偿有很多的实现方式：

1、本地建表方式，存储相关数据，然后通过定时任务扫描提取，并借助反射机制触发执行

2、也可以采用简单的消息中间件，构建业务消息体，由下游的的消费任务执行。如果失败，可以借助MQ的重试机制，多次重试

## 6、备份

任何服务器都有宕机的可能性，一旦存储了数据，带上状态，如果发生故障，数据丢失，后果是我们无法承受的。

所以，容灾备份也就变成了互联网的基本能力。

那如何备份，不同的框架有不用的玩法。我们以 Redis 为例：

Redis 借助 RDB 和 AOF 来实现两台服务器间的数据同步

* RDB，全量数据同步
* AOF，增量数据同步，回放日志

一旦主节点挂了怎么办？

这里引入哨兵机制。哨兵机制可以实现主从库的自动切换，有效解决了故障转移。整个过程分为三个阶段：监控、选主、通知。

除了 Redis 中间件外，其他常见的 MySQL、Kafka 消息中间件、HBase 、ES 等 ，凡是涉及到数据存储的介质，都有备份机制，一旦主节点挂了，会启用备份节点，保证数据不会丢失。

## 7、多活策略

虽然有了上面的备份策略，那是不是就万事大吉呢？

在一些极端情况，如：机房断电、机房火灾、地震、山洪等不可抗力因素，所有的服务器都可能出现故障，无法对外提供服务，导致整体业务瘫痪。

为了降低风险，保证服务的24小时可用性，我们会采用 多活策略。

常见的多活方案有，同城双活、两地三中心、三地五中心、异地双活、异地多活

不同的方案技术要求、建设成本、运维成本也都不一样。

多活的技术方案复杂，需要考虑的问题点也非常多，这里只是抛砖引玉就不过多展开

## 8、隔离

隔离属于物理层面的分割，将若干的系统低耦合设计，独立部署，从物理上隔开。

每个子系统有自己独立的代码库，独立开发，独立发布。一旦出现故障，也不会相互干扰。当然如果不同子系统间有相互依赖，这种情况比较特殊，需要有默认值或者异常特殊处理，这属于业务层面解决方案。

隔离属于分布式技术的衍生产物，我们最常见的微服务解决方案。

将一个大型的复杂系统拆分成若干个微服务系统，这些微服务子系统通常由不同的团队开发、维护，独立部署，服务之间通过 RPC 远程调用。

隔离使得系统间边界更加清晰，故障可以更加隔离开来，问题的发现与解决也更加快速，系统的可用性也更高。

## 9、限流

高并发系统，如果遇到流量洪峰，超过了当前系统的承载能力。我们要怎么办？

一种方案，照单全收，CPU、内存、Load负载飚的很高，最后处理不过来，所有请求都超时无法正常响应。

另一种解决方案，“舍得，有舍有得”，多余的流量我们直接丢弃。

限流定义：

限制到达系统的并发请求数量，保证系统能够正常响应部分用户请求，而对于超过限制的流量，则通过拒绝服务的方式保证整体系统的可用性。

根据作用范围：限流分为单机版限流、分布式限流

1、单机版限流

主要借助于本机内存来实现计数器，比如通过AtomicLong#incrementAndGet()，但是要注意之前不用的key定期做清理，释放内存。

纯内存实现，无需和其他节点统计汇总，性能最高。但是优点也是缺点，无法做到全局统一化的限流。

2、分布式限流

单机版限流仅能保护自身节点，但无法保护应用依赖的各种服务，并且在进行节点扩容、缩容时也无法准确控制整个服务的请求限制。而分布式限流，以集群为维度，可以方便的控制这个集群的请求限制，从而保护下游依赖的各种服务资源。

限流支持多个维度：

* 整个系统一定时间内（比如每分钟）处理多少请求
* 单个接口一定时间内处理多少流量
* 单个IP、城市、渠道、设备id、用户id等在一定时间内发送的请求数
* 如果是开放平台，则为每个appkey设置独立的访问速率规则

常见的限流算法：

* 计数器限流(固定窗口限流)
* 滑动窗口限流
* 漏桶限流
* 令牌桶限流

## 10、熔断

熔断，其实是对调用链路中某个资源出现不稳定状态时（如：调用超时或异常比例升高），对这个资源的调用进行限制，让请求快速失败，避免影响到其它的资源而导致级联错误。

熔断的主要方式是使用断路器阻断对故障服务器的调用

断路器有三种状态，关闭、打开、半打开。

* 1、关闭（Closed）状态：在这个状态下，请求都会被转发给后端服务。同时会记录请求失败的次数，当请求失败次数在一段时间超过一定次数就会进入打开状态。
* 2、打开（Open）状态：在这个状态下，熔断器会直接拒绝请求，返回错误，而不去调用后端服务。同时，会有一个定时器，时间到的时候会变成半打开状态。目的是假设服务会在一段时间内恢复正常。
* 3、半打开（Half Open）状态：在这个状态下，熔断器会尝试把部分请求转发给后端服务，目的是为了探测后端服务是否恢复。如果请求失败会进入打开状态，成功情况下会进入关闭状态，同时重置计数。

## 11、降级

降级是系统保护的一种重要手段。

正如 “好钢用在刀刃上”，为了使有限资源发挥最大价值，我们会临时关闭一些非核心功能，减轻系统压力，并将有限资源留给核心业务。

比如电商大促，业务在峰值时刻，系统抵挡不住全部的流量时，系统的负载、CPU
的使用率都超过了预警水位，可以对一些非核心的功能进行降级，降低系统压力，比如把商品评价、成交记录等功能临时关掉。弃车保帅，保证
创建订单、订单支付 等核心功能的正常使用。

当然，不同业务、不同公司，处理方式也各不相同，需要结合实际场景，和业务方同学一块讨论，最后达成一个统一认可的降级方案。

总结下来：降级是通过暂时关闭某些非核心服务或者组件从而保护核心系统的可用性。

