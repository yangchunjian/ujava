import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,e as t}from"./app-Ee_aCQG0.js";const n={};function r(h,l){return i(),e("div",null,l[0]||(l[0]=[t('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>在某种程度上来说，软件的复杂性是应对无处不在的错误所带来的。要想在不可靠的硬件、软件和网络的基础上构建可靠的系统，容错是必不可少的。</p><h2 id="错误源" tabindex="-1"><a class="header-anchor" href="#错误源"><span>错误源</span></a></h2><p>要做到更好的容错、健壮和可靠，首先需要全面的梳理可能导致错误的源头和可能性。</p><p>要分析错误源头，则要首先分析应用及流程锁依赖的要素和环节。针对每一个要素和环节，推敲会出错的地方；要了解可预料到的错误，可以看看 Java 库或框架里的各种 Exception 。</p><h4 id="机器节点" tabindex="-1"><a class="header-anchor" href="#机器节点"><span>机器节点</span></a></h4><ul><li>磁盘故障、内存耗尽、CPU 100% 占用、掉电；</li></ul><h4 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h4><ul><li>DNS 故障、机架故障、路由器故障、设备故障、电缆故障；</li><li>连接中断、请求排队（延迟）、网络丢包、网络重传、网络拥塞、网络分区。</li></ul><h4 id="时间" tabindex="-1"><a class="header-anchor" href="#时间"><span>时间</span></a></h4><ul><li>很多监控统计依赖于时钟；</li><li>数据最终一致性的操作依赖于到达先后顺序；</li><li>同一台机器的时钟晶振可能受温度影响而波动；</li><li>不同机器上的时钟是不一致的，通过 NTP 协议同步；</li><li>NTP 协议是经过网络的，这意味着网络的不稳定会影响时钟的同步；</li><li>“跳秒”现象：1 分钟有 59s 或 61s ；</li><li>任务耗时过长，对外部来说就是无响应。</li></ul><h4 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h4><ul><li>资源不存在，比如文件不存在；</li><li>资源暂时不可用，比如端口已占用；</li><li>没有可用资源，比如连接池满；</li><li>资源路径已经被移动；</li><li>资源访问时的同步死锁。</li></ul><h4 id="数据" tabindex="-1"><a class="header-anchor" href="#数据"><span>数据</span></a></h4><ul><li>不符合预期格式的数据；</li><li>脏数据引起解析错误；</li><li>不一致的数据引起后继行为错误；</li><li>大对象数据引起 FullGC 导致响应不稳定；</li><li>错误配置；</li><li>非法请求获得正常资源；</li><li>恶意代码。</li></ul><h4 id="计算" tabindex="-1"><a class="header-anchor" href="#计算"><span>计算</span></a></h4><ul><li>溢出，不符合运算法则；</li><li>除零，无值可表示；</li><li>有限精度，浮点计算错误；</li><li>逻辑错误，比如越界、不正确的算法。</li></ul><h4 id="设计" tabindex="-1"><a class="header-anchor" href="#设计"><span>设计</span></a></h4><ul><li>设计不足或不合理，容易令人疏忽而导致误操作；</li><li>危险操作无确认、无提示，容易造成损失；</li><li>少数服从多数原则，达不到多数；</li><li>Leader 的消息无法被其它节点接收，被其它节点判定为下线。</li></ul><h4 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h4><ul><li>中途取消操作；</li><li>逆向操作。</li></ul><h4 id="负荷" tabindex="-1"><a class="header-anchor" href="#负荷"><span>负荷</span></a></h4><ul><li>大流量超出应用承受负荷。</li></ul><h4 id="安全" tabindex="-1"><a class="header-anchor" href="#安全"><span>安全</span></a></h4><ul><li>非授权访问；</li><li>数据泄露；</li><li>数据被篡改；</li><li>访问拒绝。</li></ul><h4 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h4><ul><li>数据覆写：访问一个共享资源时，进程 A 获取锁，然后进入了 stop-the-world GC pause ； 进程 B 发现锁已过期，然后申请获得锁，进行数据写操作，接着释放锁；进程 A 结束 GC，进行数据写操作。 进程 A 将 进程 B 的写数据覆盖了。</li></ul><h4 id="拜占庭错误" tabindex="-1"><a class="header-anchor" href="#拜占庭错误"><span>拜占庭错误</span></a></h4><ul><li>当分布式系统里的节点要达成共识时，少数节点故意发送错误消息迷惑其它节点，以造成整体错误决策。比如航天领域防电子辐射干扰、多参与者协作和决策。</li></ul><h2 id="健壮性" tabindex="-1"><a class="header-anchor" href="#健壮性"><span>健壮性</span></a></h2><p>健壮性是极为重要的程序质量属性。分为代码健壮性和业务健壮性。健壮性体现在代码和业务上的错误和异常处理上，避免整体失败、数据泄露、不一致、资损等故障。要做出健壮性好的设计和程序，就要预先思考清楚：流程中有哪些可能的错误和异常，每一种对应的处理措施是什么 ？ 这样，才能让逻辑思维更加缜密，也是锻炼逻辑思维的一种有效之法。</p><ul><li>代码健壮性体现在避免局部失败导致整体失败。常见考虑：参数校验以拦截不合法请求、越界异常捕获、JSON 脏数据异常捕获、类型转换异常捕获、底层异常捕获（连接异常、DB 异常、网络超时异常等）。</li><li>业务健壮性体现在业务的闭合环。在整个业务过程中会发生什么异常，导致什么问题（体验或资损问题），如何处理。比如同城异常检测要考虑商家同城呼叫失败后又快递发货的情形。</li></ul><h2 id="容错机制" tabindex="-1"><a class="header-anchor" href="#容错机制"><span>容错机制</span></a></h2><h4 id="思路与方法" tabindex="-1"><a class="header-anchor" href="#思路与方法"><span>思路与方法</span></a></h4><ul><li>设定系统假定，检测系统假定是否成立，然后在系统假定上构建系统；</li><li>聚焦高频错误：磁盘故障 &gt; 服务器单机故障 &gt; DNS 故障 &gt; 机架故障 &gt; 路由器重启；</li><li>错误提示规范：定义规范一致的错误码和错误消息；</li><li>快速失败并记录日志：适用于“请求检测，请求中含有错误或非法数据”的场景；</li><li>忽略失败并记录日志：适用于“不影响整体输出且不造成负面影响的极次要地方有点小问题”的场景；</li><li>确认机制：设计一种确认机制，确保交互的多方参与者满足某种契约或约束；</li><li>预防策略：避免容易导致错误的做法；</li><li>冗余策略：冗余、替换、路由，见高可用部分；</li><li>降级策略：当核心服务出现问题时，提供有损服务来维持稍低质量的服务，保证服务的可用性；</li><li>重试策略：幂等；完全重试；补偿重试；</li><li>回滚策略：中途取消，重续执行很容易导致脏数据，考虑回滚操作；</li><li>故障恢复：监控、检测错误和故障、自动恢复；</li><li>乐观锁：递增的 fencing token ，防止过期写操作覆盖已经完成的写操作；</li></ul><h4 id="系统假定" tabindex="-1"><a class="header-anchor" href="#系统假定"><span>系统假定</span></a></h4><ul><li>同步模型假定：任何网络延迟、进程暂停、时钟错误都不可能超出某个上限值。即：有限的网络延迟；有限的进程暂停；有限的时钟错误。</li><li>部分同步模型假定：在同步模型假定的基础上，允许极少数的无法预测的超上限的网络延迟、进程暂停、时钟错误。</li><li>异步模型假定：对时序不做假定，难以预料事件何时发生和动作何时执行。</li><li>节点崩溃假定：节点突然失去响应，再也无法正常运行；</li><li>节点崩溃-恢复假定：节点可能在任何时候失去响应，在一段时间之后自动恢复并正常运行；易失性存储（比如内存）中的数据丢失，而持久性存储（比如磁盘）中的数据完好；</li><li>拜占庭假定：部分节点通过虚假消息欺骗其它节点，从而诱导作出错误的整体决策。</li></ul><p>最常见的系统假定：部分同步模型假定 + 节点崩溃-恢复假定。</p><h4 id="算法的正确性" tabindex="-1"><a class="header-anchor" href="#算法的正确性"><span>算法的正确性</span></a></h4><ul><li>正确性假定：算法满足某些指定性质。</li><li>达成预期结果、安全、活性。</li></ul><h4 id="重试" tabindex="-1"><a class="header-anchor" href="#重试"><span>重试</span></a></h4><ul><li>使操作满足幂等性质；</li><li>可以使用失败队列来记录失败的操作及失败信息、失败现场；</li><li>完全重试策略：整个操作从头开始执行，适合多读少写的长事务；</li><li>补偿重试策略：从失败现场的地方重续执行，适合多写且回滚代价昂贵的长事务；‘</li><li>完全重试策略，可指定重试次数；</li><li>可采用定时任务重试。</li><li>幂等：唯一索引、Token 机制（防页面重复提交）、分布式锁、select+insert、状态机幂等、查询/删除天然幂等。</li></ul><h4 id="故障检测与恢复" tabindex="-1"><a class="header-anchor" href="#故障检测与恢复"><span>故障检测与恢复</span></a></h4><ul><li>故障检测主要靠监控。服务器监控（CPU、内存利用率、Load、IO RW、Net RW）、服务监控（RT、QPS、消费速率</li><li>、延迟、网络连接；来源、TOPN）、Java 监控（ThreadPool、Heap、GC 等）、异常监控（失败次数、失败比例；超时，消费堆积或不均）、业务监控（瞬时峰值、瞬时下跌、同比上涨或下跌、大数据对象）、对账监控（数据一致性检测，尤其资金相关）。</li><li>心跳机制：心跳机制用于故障检测。每台工作机每隔指定时间将自己的CPU、内存、磁盘、网络、IO读写、负载等情况上报给 Master， Master 会判断服务器是否正常，以决定是否分发流量给该服务器。每台服务器与 Master 有个超时设置，如果达到超时没有收到该服务器的心跳信息，则会判断服务器出现问题。心跳机制需要 KeepAlive （连接最大空闲时间） 属性，使用 MQTT 协议。</li><li>租约机制：每台工作机向 Master 申请具有一定租约期限的服务时间。当服务时间快到时，再向 Master 继续申请延长租约的有效期。如果因为网络或工作机故障导致租约无法响应，则会将该工作机隔离，不再提供服务。</li><li>WAL（Write Ahead Log）： 预写日志，恢复日志。基本机理是复制状态机、备忘录、备份。关系数据库系统中用于提供原子性和持久性。in-place 和 shadow paging 。提升磁盘写性能：随机读写改顺序读写、缓冲单条读写改批量读写、单线程读写改并发读写。同步 WAL 文件和数据库文件的行为被称为 checkpoint（检查点）。实现方法：DB - undo, redo 机制；ES - fsync 机制；ZK - 先写 WAL，再更新内存，最后通知客户端；定期将内存中的目录树进行 Snapshot，落磁盘； ETCD - wal 和 snap 目录； HBase - 更新数据前写 WAL， 且写 WAL 与数据更新在同一事务。</li><li>检查点（CheckPoint）：系统定期将内存状态以检查点文件的形式dump到磁盘中，并记录检查点时刻对应的操作日志回放点。 检查点可以快速提升故障恢复的速度。</li><li>备份。备份是应对数据故障（丢失、不一致）的重要保障。备份只是实现数据的恢复，并不能完全实现故障恢复。故障恢复是指服务或服务器回到正常可用状态。</li></ul><h4 id="mysql备份" tabindex="-1"><a class="header-anchor" href="#mysql备份"><span>MySQL备份</span></a></h4><ul><li>逻辑备份和物理备份。逻辑备份是可读文件、恢复简单灵活（恢复工具及选项）、在不同机器上运行、与存储引擎无关、避免物理环境导致的数据损坏，但恢复时间较长，需要<br> MySQL 来完成、需要测试恢复；物理备份通常是不可读的二进制文件，恢复更简单（只要拷贝文件到目的路径）、恢复时间很短，但 InnoDB<br> 的原始文件通常比逻辑备份的文件更大。两种方式可混合。</li></ul>',46)]))}const o=a(n,[["render",r],["__file","faulttolerant.html.vue"]]),c=JSON.parse('{"path":"/synthesis/faulttolerant.html","title":"设计容错","lang":"zh-CN","frontmatter":{"title":"设计容错","icon":"laptop-code","category":["设计高频"],"tag":["高频"],"description":"简介 在某种程度上来说，软件的复杂性是应对无处不在的错误所带来的。要想在不可靠的硬件、软件和网络的基础上构建可靠的系统，容错是必不可少的。 错误源 要做到更好的容错、健壮和可靠，首先需要全面的梳理可能导致错误的源头和可能性。 要分析错误源头，则要首先分析应用及流程锁依赖的要素和环节。针对每一个要素和环节，推敲会出错的地方；要了解可预料到的错误，可以看看...","head":[["meta",{"property":"og:url","content":"https://ujava.cn/synthesis/faulttolerant.html"}],["meta",{"property":"og:site_name","content":"UJava"}],["meta",{"property":"og:title","content":"设计容错"}],["meta",{"property":"og:description","content":"简介 在某种程度上来说，软件的复杂性是应对无处不在的错误所带来的。要想在不可靠的硬件、软件和网络的基础上构建可靠的系统，容错是必不可少的。 错误源 要做到更好的容错、健壮和可靠，首先需要全面的梳理可能导致错误的源头和可能性。 要分析错误源头，则要首先分析应用及流程锁依赖的要素和环节。针对每一个要素和环节，推敲会出错的地方；要了解可预料到的错误，可以看看..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T03:42:50.000Z"}],["meta",{"property":"article:author","content":"UJava"}],["meta",{"property":"article:tag","content":"高频"}],["meta",{"property":"article:modified_time","content":"2024-04-15T03:42:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计容错\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T03:42:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UJava\\",\\"url\\":\\"https://ujava.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"错误源","slug":"错误源","link":"#错误源","children":[]},{"level":2,"title":"健壮性","slug":"健壮性","link":"#健壮性","children":[]},{"level":2,"title":"容错机制","slug":"容错机制","link":"#容错机制","children":[]}],"git":{"createdTime":1713152570000,"updatedTime":1713152570000,"contributors":[{"name":"yangchunjian","email":"1091938307@qq.com","commits":1}]},"readingTime":{"minutes":9.06,"words":2718},"filePathRelative":"synthesis/faulttolerant.md","localizedDate":"2024年4月15日","excerpt":"<h2>简介</h2>\\n<p>在某种程度上来说，软件的复杂性是应对无处不在的错误所带来的。要想在不可靠的硬件、软件和网络的基础上构建可靠的系统，容错是必不可少的。</p>\\n<h2>错误源</h2>\\n<p>要做到更好的容错、健壮和可靠，首先需要全面的梳理可能导致错误的源头和可能性。</p>\\n<p>要分析错误源头，则要首先分析应用及流程锁依赖的要素和环节。针对每一个要素和环节，推敲会出错的地方；要了解可预料到的错误，可以看看 Java 库或框架里的各种 Exception 。</p>\\n<h4>机器节点</h4>\\n<ul>\\n<li>磁盘故障、内存耗尽、CPU 100% 占用、掉电；</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
