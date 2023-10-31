---
title: 设计原理:代码抽象与分层
index: false
icon: laptop-code
category:
  - 设计原理
---

> 抽象与分层，是计算与程序世界里最根本的思想。逻辑之始。

## 抽象

#### 抽象在代码中

有同学会问：抽象是什么？看上去真的很难懂啊！ 实际上，抽象就隐藏在写下的每一行代码里。

抽象主要有通用域抽象和领域抽象。通用域抽象是所有软件都会复用的概念、实体与交互；领域抽象则特定于某个具体的行业领域。抽象通常使用术语来表达。

让我们来重新看看写过的代码，从中找出抽象吧！

主要有六类抽象：

* 流程型抽象： 表达应用流程，将单一功能构造成实用的服务
* 任务型抽象： 使用有限可控的任务执行者集稳定高效地完成源源不断来临的任务
* 数据处理抽象： 任务的实际内容
* 结构型抽象： 存储和容纳执行任务所需要的资源、数据集
* 数据模型抽象： 具有语义关联的数据项聚合体
* 原子数据抽象： 组成数据的基本数据单位

## 六类抽象

#### 流程型抽象

流程型抽象，是对各种应用流程的表达，控制和引导流程的实体。

流程抽象要解决应用中的请求（及携带的数据）在流程及节点里的处理流转。这些流转有分支、循环、回溯、转发、路由、阻塞、等待、退出等。

* Entrance: 入口 ； Exit: 出口
* Flow: 流程，具有入口 Entrance 和出口 Exit 的NodePath
* Node: Flow 中的节点
* NodePath: 节点路径，由一系列节点及连接组成的子流程
* Condition: 触发条件，决定流程的转向
* Request: 请求 ； Response: 响应 ;
* Component: 组件，Node 的能力抽象
* Dependency: Node 之间的依赖关系
* Plugin: 具有不同功能的插件，可配置化，Component 的一种形态
* Service: 提供某种全局服务，通常是单例，Component 的一种形态
* Enginer: 引擎，控制整个流程的执行
* Initializer：流程启动时，元数据、配置依赖及全局服务的初始化，比如Spring进行Bean初始化
* Handler: 接收请求 Request ， 输出响应 Response
* Filter: 过滤掉不能处理的请求 Request
* Goto: 直接跳转到某个 Node
* Dispatcher: 将 Request 转发给合适的 Handler
* Router: 将 Request 路由到适合的地方做下一步处理
* Tracer: NodePath 的追踪与记录
* Switcher: 流程开关，根据匹配结果切换到某个 NodePath
* Breaker: 适配某种 Condition 时，退出所在 NodePath
* Blocker: 阻塞 NodePath ，通常是某种 Condition 未能满足
* Joiner: 动态加入者，可以是 Node, NodePath , Component 等
* ConflictSolver: 当条件适配多种规则或节点时的解决策略
* Waiter: 等待某种 Condition 触发的实体
* Notifier: 触发某种 Condition 的实体
* Terminator: Flow 的终结者

#### 任务型抽象

功能的实现，可以抽象为任务来处理。任务型抽象包含了用于执行任务的实体。

任务型抽象必须解决“有限可控的任务执行者集合”与“任务集合的增减不可控”之间的矛盾。因为应用内存是有限的，不能无限增长，因此必须用可控地执行数量和抵达速率均不可控的任务集合。

* Function: 实现某种功能的表达
* Task: 基于 Function 的通用任务语义
* Job: 通常指不受人工干预的后台运行的 Task
* Resource: 完成任务所需要的资源
* TasksHolder: Task 持有者，通常是任务队列
* Worker：从 TasksHolder 取出 Task 并实际执行者
* Pool: 池对象，有限 Worker 的持有者，并使之增减可控和合理利用
* Executor：将 Worker 和 Pool 组合起来执行任务的管理者
* ResultFetcher: Task 执行结果的获取
* Rejecter: 拒绝执行的实体，通常采用某种策略 Strategy
* Protector: 保护 Woker 不受干扰正确执行，比如锁 * Lock * ，同步 Sychronizer 等
* Lock: 并发执行下的锁，Protector 的一种形态
* Sychronizer: 并发执行的同步体，通常会使用一个监视器
* Cleaner: 清理/释放 Resource
* State: Task 或 Worker 或 Pool 或 Executor 的状态
* Strategy: Task 的执行策略，当没有足够 Worker 时要采取的处理策略

#### 数据处理抽象

数据处理抽象，是对数据或数据集执行特定操作的实体。在程序中尤为多见。

* Assembler: 数据组装，将来自多个源的数据组装成中间或最终对象
* Builder: 参数构建、结果构建。 还专门有个 Builder 模式来构建复杂对象
* Checker: 参数校验、结果校验， 检测参数是否合法，结果是否符合预期
* Caster： 数据的类型转换
* Converter： 数据转换，将数据从一个形态转换为另一个形态
* Formatter： 按照某种格式聚合和输出可读的数据形态
* Fetcher: 从某个 DataSource 获取数据
* Cacher：数据的缓存，复用提升性能
* Copier：将数据从一个结构拷贝到另一个结构
* Sync: 将大数据集从一个源同步到另一个源
* Extracter : 数据提取，从复杂数据结构解析出所需字段和信息，比如从 JSON 或 XML 中解析出所需信息
* Parser： 数据解析，从一种表现形态解析为另一种表现形态，数据信息不变，比如 JSON 转为 Map，日期转时间戳
* Transfer: 数据类型传输，从 DO 到 DTO
* Transfomer: 数据变换，从一种形态变换到另一种
* Getter: 从对象中获取某个字段的值 ; Setter: 设置对象的某个字段的值
* Finder： 查找到符合条件的数据或数据的位置
* Replacer： 使用某个数据替换掉指定数据
* Iterator: 迭代遍历地访问某种数据结构而屏蔽内部实现细节
* Joiner: 将多个不同列的数据集根据关联字段合并为一个具有所有列的数据集
* Matcher： 将数据匹配某个条件或模式
* Merger： 将多个子数据集合并为一个汇总的数据集
* Splitter: 将一个聚合的数据集分割为多个子数据
* Separator: 分割符、关注点隔离
* Collector: 从Stream里根据指定操作收集数据并构建出新的数据集
* Filter: 根据指定条件从一个数据集中筛选出指定的数据构成新的数据集
* Foreach： 遍历数据集的每个元素并执行某种操作
* Grouper: 对数据集根据某个条件进行分组
* Generator: 数据集的生产者
* Mapper: 将一个数据集映射为另一个数据集
* Reducer: 对某个集合的元素反复执行某种指定操作得到数据集或单个数据结果
* Supplier: 数据集的提供者
* Searcher: 从一个结构中搜索某个元素
* Sorter：排序，将数据集按照某个顺序重新组合成新的数据集，每个相邻元素都满足某种指定条件
* Add&Delete：在某个结构中添加/删除数据
* Query: 客户端向服务端请求数据
* Selecter: 选择，从数据集或组合结构中选择符合某种条件的元素集合，比如DOM Selecter, SQL Selector
* Updater：更新，将已有的数据更新为新的状态

## 结构型抽象

结构型抽象，用于存储数据集，便于批量高效地处理。

* Buffer: 缓冲
* BitMap: 位图
* Empty: 空结构
* Enum: 有限可列元素的枚举
* File: 具有文本语义的数据簇的聚合
* List：有序、可重复的数据组成的列表
* Set：无序、不重复的数据组成的集合
* Map: 键-值对
* Stack : 后进先出的数据结构
* Queue：队列，一般是先进先出
* Heap: 前驱元素与后继元素总是满足某种比较关系的数据结构
* Partition：分区，将数据集分区为多个子数据集进行存储和处理
* Tree: 树，有分叉的数据结构
* Graph: 图，节点相互有连通的数据结构
* Stream: 具有惰性计算能力的、可无界的数据结构
* Text: 文本，具有松散结果的字符串数据聚合

#### 数据模型抽象

数据模型，将有关联的一系列数据组成携带领域语义的对象

* Class: 类，类别； 具有相似性的实例的普遍性表达
* Config: 配置，一般是 键值对，JSON，XML，Yaml 等，来自文件、内存数据等
* Context: 上下文，在流程中起串联所有必要资源的作用
* MetaData: 元数据，描述数据及结构的数据
* Entity&Object： 通用实体/领域实体
* Instance: 实例，实体的某个存在
* Field: 字段，包含字段的名称、类型、修饰符等信息
* Property&Attribute: 属性，包含属性的名称、类型、修饰符等信息
* State: 实例的状态
* Method: 方法，实例行为的表达
* Factory: 工厂，组件的创建者
* Holder：任意对象的持有者，通常与泛型结合使用
* Model: 数据模型，定义返回对象包含的数据字段及类型
* Pager: 分页，页数和页大小
* Result: 结果，通常包含 code, message, data
* Placeholder： 占位符，内含待替换的引用变量
* Option: 可选项
* Range: 区间，最常见的就是时间区间
* Tuple: 元组，若干语义关联的数据聚合体
* Record: 记录，具有语义关联的数据聚合而成
* Message: 消息
* Tag: 标签，从某个角度标识某个实体
* Variable: 变量，临时可变数据的持有者

## 原子数据抽象

原子数据，是组成数据的基本数据单位。

* Bit: 位
* Byte: 字节
* Bool： 真，假
* Char：单个字符
* Int&Long：整数
* Float&Double：浮点数
* Number：数值
* String：有序字符列表组成的字符串
* Constant： 常量
* Error&Exception: 错误与异常
* Pointer: 指针，存储指向对象的内存地址
* Reference: 对象的引用者

#### 抽象的实际应用

从程序中提炼抽象后，如何应用到实际工作中呢？

实际程序中，往往是上述抽象的灵活组合。 各种抽象的关系，在程序中的体现是：

> 原子数据抽象 -> 聚合为数据模型抽象 -> 由结构型抽象来存储 -> 通过数据处理抽象 -> 组合为任务抽象 ->
> 通过流程抽象来控制任务执行和流转 -> 最终流程实现

在命名时，可以直接使用这些词汇，凸显语义，使代码更容易可读可理解。

## 分层

分层，就是将提炼出的抽象置于合适的语义层次。 比如常用的Controller, FacadeService, BaseService, DAO， Repository 等，就是不同的层次。

分层原则主要有：

* 高层语义表达意图，底层语义呈现细节。
* 上一层依赖下一层的语义抽象而不是实现。
* 业务层 -> 共享产品层 -> 共享层 -> 基础层
* 相同层次一般不相互直接调用，比如 Controller 不要直接调用其他的 Controller 的东西。
* 不建议跨层调用，比如 Controller 不直接调用 DAO 的功能。
* 原子语义的层次，与组合语义的层次不要混杂在一起。

合适的语义层次划分，会使流程和交互更加清晰可读容易理解。

## 缺失抽象与分层会怎样

#### 抽象缺失

最近排查解决一个问题，大概是这样的：

* 存储层： 订单的赠品的价格数据存储，没有存储相应的商品ID(订单内的正常商品是一定有的)；
* 中间层： 无法取到订单赠品的价格信息（没法对应上）；
* 输出层： 一些报表字段的输出没有考虑到对赠品的处理，导致输出有误；要对赠品做一些特殊的逻辑处理。

看上去不存储赠品的商品ID，也不算是什么问题；但从抽象角度来看，是不能理解的。赠品虽然与商品在价格上表现有些特殊，但在商品ID存储上，并没有特别之处。如果能够一致性地处理，那么就不会出现无法取到赠品信息的价格信息，也不需要针对赠品做一些特殊的兼容（比如聚合价格数据对应到商品时有特殊处理、报表字段输出的逻辑要过滤赠品等），也就不需要花时间去调试和排查解决这个问题。

突然想到那个问题：软件维护成本是怎么产生的？除新需求外，往往来自之前埋下的坑。那么坑又是怎么产生的呢？通常是设计不严谨导致。
由于设计不严谨，遇到特定情况或者扩展就要做特殊处理，要做兼容，一个兼容可能引发一系列兼容，尤其源头的不严谨，会导致源到端的一整条路径的兼容，代码就会比较难看难理解，这样就埋坑了；解决坑的时候，兼容性的解决方案，在事情的变化中又会埋下新的坑。程序猿媛们就在埋坑和填坑的往复循环中“痛并快乐着”。

那么设计不严谨又是怎么产生的呢？
通常是抽象和分层做的不够导致的。开发人员习惯于按照流程顺手写下来，而不细思和提炼出流程中的概念、关联、实体、交互等，将其构建成一件更有序更柔软的逻辑装置。结果就是当有变化或变体的时候，装置就出毛病罢工，就要做修修补补。因此，建议能够克制性地退后一步思考，不急于着手，而是先仔细推敲流程，提炼出关键因素，进行抽象和分层，在其指引下进行设计和开发。这个建议也是给自己的。

#### 分层缺失

工作伙伴CR我的代码时，有时会觉得我写的代码看起来比较累。这并不是因为我写的函数很长。实际上，我很注重代码复用，写的函数都是比较短小的，按理来说不应该有这样的感受。

仔细思考后发现，是分层不够清晰导致。就是写程序时，往往需要的函数就写到一个类里，导致这个类混杂了很多功能，掺杂了很多不同的语义，导致理解流程时不够直观清晰。

通过抽象和分层，将不同功能语义抽离到不同的类中实现，并在合适的地方引入依赖，这样代码层次就更容易理解可读了。

## 小结

抽象与分层，是计算与程序世界里最根本的思想。逻辑之始。本文从代码中提炼了许多表达通用抽象语义的词汇，可以作为设计、开发和交流的指引，同时通过案例说明了抽象缺失和分层缺失导致的后果。对于开发人员，能够预先细致思考抽象与分层，做出的设计和写出的代码往往更加简洁优雅。

