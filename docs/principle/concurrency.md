---
title: 并发
icon: laptop-code
category:
  - 设计原理
---

## 简介
并发，就是在同一时间段内有多个任务同时进行着。这些任务或者互不影响互不干扰，或者共同协作来完成一个更大的任务。

比如我在做项目 A，修改工程 a ; 你在做项目 B, 修改工程 b 。我们各自做完自己的项目后上线。我和你做的事情就是并发的。如果我和你修改同一个工程，就可能需要协调处理冲突。并发是一种高效的运作方式，但往往也要处理并发带来的冲突和协作。

世界天然是并发的。本文总结并发相关的知识和实践。


## 基础
计算机中实现并发的方式有：多核、多进程、多线程；共享内存模型。基本方法是分而治之、划分均衡任务、独立工作单元、隔离访问共享资源。可以将一个大任务划分为多个互相协作的子任务，将一个大数据集划分为多个小的子数据集，分别处理后合并起来完成整个任务。并发需要解决执行实体之间的资源共享和通信机制。

多核：有多个 CPU 核心，每个 CPU 核心都拥有专享的寄存器、高速缓存。多个 CPU 核心可以分别处理不同的指令和数据集。多核心之间的通信机制是系统总线和共享内存。多核是并发的硬件基础。

多进程模型：进程是程序的一次执行实例，具有私有地址空间，由内核调度。进程有父子关系。进程间通信方式：管道（无名管道和命名管道 FIFO）、消息队列、共享内存、套接字、信号机制。进程创建和切换的开销都比较大。多进程是多任务执行的上下文基础。

多线程模型：线程是运行在进程上下文中的共享同一个进程私有地址空间的执行单元，亦由内核调度。线程之间是对等的。线程通信方式：消息队列、共享内存。线程的创建和切换开销比进程要小很多。多线程是多任务的调度基础。

在 Java 应用语境中，执行实体对应着线程。以下涉及到执行实体的时候，直接以线程代替。并发能有效利用多个线程同时工作，大幅提升性能。同时，也是有一定代价的：线程阻塞与上下文切换（5000-10000 CPU 时钟）、内存同步开销（使 CPU 缓存失效、禁止编译器优化等）。不良的并发设计，可能导致大量线程等待、阻塞、切换，反而不如串行的执行效率高。


## 分析
如何去思考和分析并发问题呢？ 并发的难点在于，（不同线程里的）任务执行的不同顺序会引发不同的结果，而这些顺序都是有一定概率性存在的。

因此，并发的关键点在于如何在合理的程度上协调任务执行顺序产生预期结果，同时又不对任务的进展产生过大的干预。就像宏观调控之于市场经济。市场经济是非常有活力的经济形式，但听凭市场经济的自由发展，会有失衡的风险。此时，就需要一定的宏观调控来干预一下。而宏观调控也不能过度，否则会抑制市场经济的活力。

注意，是协调执行顺序而不是控制。实际上，执行顺序是难以控制的。大多数时候，能做的是对少数步骤执行施加一些影响，使执行顺序符合某些先后约束，从而能够产生预期结果。绝大多数的步骤执行，还是任之自然进行。


#### 资源依赖

要正确协调执行顺序，先得弄清楚要协调哪些任务，或者说，任务执行受什么影响：

有限共享的同一资源。比如两个人去争用仅有的一台打印机，只有一个人用完释放后，才能让另一个人用。
资源之间的依赖。比如任务 A 读变量 x , 任务 B 写变量 y ，x = y + 1， 则 A 读和 B 写的先后顺序不同，会产生不同的结果。假设 x = 3, y= 2 。B 要写入 y = 5 。若 A 先读 B 再写, 则 A 读到的是 x = 3； 若 B 先写再 A 读，则 A 读到的是 x = 6。当两个变量是同一个时，是一种“写后读”的依赖，姑且称之为“变化依赖”。
比如，同一个订单的下单过程，两个线程去分别读写订单数据（假设都是读 DB 主库）：

共享的资源：订单数据行、网络带宽、请求处理池、DB 连接；
变化依赖：订单状态的读强依赖于订单状态的写。
因此，任务执行受有限共享的资源及资源依赖影响。如果多个任务并发执行，首先要理清楚这些任务所依赖的资源以及资源之间的依赖。资源类型包括：变量、数据行（记录）、文件句柄、网络连接、端口等。如果两个任务没有资源依赖，则各自执行即可；如果有共享资源依赖，则需要在合适的时候自动调节彼此获取共享资源的顺序。

值得提及的是，有一种隐式的资源依赖。比如一个大的任务拆分为 A,B,C 三个任务，A 和 B 都执行完成后，才能执行 C。此时 C 的执行依赖于 A,B 的执行完成状态（也很可能依赖 A,B 的执行结果集）。 这种隐式的资源依赖，也称为任务协作。


#### 逻辑时钟

如何判断并发执行结果是准确的呢？比如 x = 1 。任务 A 在 t 时刻读 x ，任务 B 在 t+1 时刻写 x =5, 任务 C 在 t+2 读 x，按理 A 读到是 1 ，C 读到是 5 。 但由于网络延时，可能 C 的读请求在 B 的写请求提交之前就到达了，因此 C 也可能读到 1。由于网络的不可靠及机器各自的时钟是有细微不同步的，因此，执行读写 x 的服务器无法判断 B, C 请求的先后性。

需要有一个逻辑时钟，给任务进行顺序编号，根据任务编号以及读写的因果性，就能判断 C 读到 1 的结果是错误的了。


happen-before

定一些基本的准则是必要的。就像欧几里得几何首先定义了五条公理然后才开始推导一样。

happen-before 是可见性判断的基本准则：符合准则的两个操作，前面的操作必然先行于/可见于后面的操作。换句话说，就是关于并发的基本定理。如果定理都不成立，那么并发的确定性结果就无从谈起了。 happen-before 的具体细则：

在同一个线程的顺序控制流中，有依赖关系的前面操作可见于后续操作；
同一个锁的 unlock 可见于 lock 操作，即 lock 时总能看到前一个 unlock 操作；
同一个 volatile 变量的写可见于读操作；
同一线程 start 先行于该线程内的所有操作，线程内的所有操作先行于该线程的 exit ；
对象的构造器方法结束先行于对象的所有操作，对象的所有操作先行于对象的 finalize 方法开始；
传递性。A 可见于 B， B 可见于 C ，则 A 可见于 C 。

## 思路
要正确协调任务的执行顺序，需要解决任务之间的协作与同步。任务之间的协作与同步方式主要有：快照机制、原子操作、指令屏障、锁机制、信号机制、消息/管道机制。


#### 快照机制

生成某个时间点的历史版本的不可变的快照数据，以一定策略去生成新的快照；直接读快照而不是读最新数据。将数据与版本号绑定，根据版本号来读取对应的数据；更新时不会修改已有的快照，而是生成新的版本号和数据。快照机制可以用来回溯历史数据。Git 是运用快照机制的典范。

快照机制并没有对任务的自然进展施加影响，只是记录了某个数据集的某个时刻的状态。应用可以根据需要去读取不同时刻的状态，做进一步处理。快照机制一般用来提升并发读的吞吐量。


#### 原子操作

将多个操作封装为一个不可分割的整体操作，其它操作不可能在这个整体操作之间插入更新相关变量。

实现原子操作有两种方式：

对变量更新加锁。但加锁会导致线程阻塞和等待，且需要释放锁，开销很大。
CAS 操作。对于单个简单变量的读写同步，加锁的开销可能远高于变量更新的开销。可以采用轮询式的 CAS 原子操作。CAS 是封装了变量的“比较相等-更新”的原子操作。

#### 指令屏障

指令屏障是在普通指令中插入特殊指令，从而在读写指令的执行之间加以执行顺序的先后约束，控制某些指令必须在另一些指令之前执行且执行结果可见，禁止 CPU 通过指令重排序来优化内存读写（有性能损失）。最常用的指令屏障是内存屏障 Memory Barrier。


#### 锁机制

锁机制用于有限共享资源的保护性访问，每次只允许一个执行体来访问可获得的共享资源。

锁机制的基础是 P-V 原语和阻塞/唤醒机制：

P(s) 操作：如果 s 是非零的，那么 P 将 s 减一，并立即返回，如果 s 为零，就挂起该线程。
V(s) 操作：将 s 加一，如果有任何线程阻塞在 P 操作等待 s 变成非零，则 V 操作会重启这些线程中的一个，重启之后，P 将 s 减一，并将控制返回给调用者。

#### 信号机制

信号机制是发出特定的信号，让接受信号的任务做相应的处理。中断是信号机制的一种典型场景。中断由某个中断源发出一个信号给某个线程，当线程收到这个信号时，可以做一些特定的动作。

Java 线程有一个中断标志位。处于不同状态时，线程对于中断有不同的反应。处于 New 和 Terminated 时，无意义；处于 Running 和 Blocked 时，只是设置中断标志位，不会影响线程状态； 处于 Time Sleep 时，会抛出异常并清空中断标志位。Java 将中断的具体处理的权力交给了应用。


#### 消息/管道

通过在两个任务之间传递消息或者建立管道，来串联起两个任务的顺序执行。消息机制常用于解耦服务，而管道常用于 Pipeline 流水线模式中。


## 模式
从并发思路中可以推导出一些常用的同步模式，来确保并发访问的安全性。主要有：Immutable、Unshared Copies、Monitor Locks 、Memory Barrier、Protected Lock、CAS。


#### Immutable

不可变数据。典型的不可变数据有字符串、快照。ES 分片里的倒排索引就是不可变的。ES 会将不可变的倒排索引与更新的倒排索引进行查询合并，得到最终的查询结果。


#### Unshared Copies

每个线程都有一份自己的拷贝，不共享，互不影响。ThreadLocal 即是应用 Unshared Copies 模式。


#### Monitor locks

Java synchronized 块应用 Monitor locks 模式，基于 object monitor 和 monitorenter/2 monitorexit 实现，由编译器和 JVM 共同协作实现。JVM 规范指明：每个对象关联一个 object monitor ，当线程执行 monitorenter 时会去获取 monitor 的 ownership ，而执行 monitorexit 则会释放 monitor 的 ownership。第二个 monitorexit 是为了在异常退出时与 monitorenter 匹配。在 hotSpot 虚拟机中，monitor 是由 ObjectMonitor 实现的。其源码位于 hotSpot 虚拟机源码 ObjectMonitor.hpp 文件中。

synchronized 方法是基于方法常量池中的方法表结构中的 ACC_SYNCHRONIZED 标识符实现。synchronized 是可重入的，同一线程连续多次获取同一个锁，不需要每次都加锁，只需记录加锁次数。同步容器 SynchronizedList, SynchronizedMap 是基于 synchronized(mutex) { // target.operation(); } 实现的对应容器的简单并发版。


#### Memory Barrier

Memory Barrier 内存屏障。当插入内存屏障后，其后的指令不会立即放在 CPU 缓存里，而是和内存屏障一起放在 FIFO 队列里，待 CPU 缓存里的指令都执行完成后，从 FIFO 中取出内存屏障后的指令来执行。

内存屏障主要有两种：

* 写内存屏障（Store Barrier）:处理器将 CPU 缓存值写回主存（阻塞方式）;
* 读内存屏障（Load Barrier）: 处理器处理失效队列（阻塞方式）。
两两组合，有四种：StoreStoreBarrier, StoreLoadBarrier, LoadStoreBarrier, LoadLoadBarrier。 XYBarrier 是指，在 XYBarrier 之前的所有 X 操作都必须在 XYBarrier 之后的任一 Y 操作之前执行完成。并且写操作对所有处理器可见。

volatile 关键字在写操作之后插入 StoreStore Barrier, 在读操作之前操作 LoadLoad Barrier。volatile 适合做单个简单状态标识符的更新、生命周期里的初始化或退出。volatile 是不加锁的。


#### Protected Lock

轻量级更灵活的锁。形式通常如下：
```java
        Lock lock = lock.lock(lockKey, time, timeUnit);
        try {
            // doBizLogic;
        } finally {
            lock.unlock();
        }

```

#### CAS

Compare-And-Swap 。CAS(V,E,N) 操作即是“先将 V 与 E 比较是否相等，如果相等，则更新到指定值 N ，否则什么都不做”。CAS 是无锁的非阻塞的，没有线程切换开销，因此在并发程度不高的情况下性能更优。Java 并发包里的绝大多数同步工具都有 CAS 的影子。 Java CAS 操作是通过 Unsafe 类的 native 方法支持的。

CAS 操作的原子语义是通过底层硬件和指令来支持的。相关指令如下：

* 测试并设置（Tetst-and-Set）
* 获取并增加（Fetch-and-Increment）
* 交换（Swap）
* 比较并交换（Compare-and-Swap）
* 加载链接/条件存储（Load-Linked/Store-Conditional）
在IA64，x86 指令集中有 cmpxchg 指令完成 CAS 功能。CPU 的原子操作在底层可以通过总线锁定和缓存锁定来实现。总线锁定是 CPU 在总线上输出一个 LOCK# 信号，阻塞其它处理器操作该共享变量的缓存的请求，独占内存；缓存锁定是通过 MESI 缓存一致性机制来保证操作的原子性。在如下情况下只能使用总线锁定：当操作的数据不能被缓存在处理器内部，或者操作的数据跨多个缓存行时，或者 CPU 不支持缓存锁定。

**CAS 有两个问题**：

* 并发度高时的空耗问题：CAS 是需要消耗 CPU 周期的。如果并发激烈，则可能陷入空耗 CPU 周期的 CAS 循环中。此时，可以采用分段的方式，将要更新的变量分为多段，对不同的段进行 CAS ，然后合并。比如 LongAdder 。
* A-B-A 问题：先更新为 A，再更新为 B，又更新为 A。可以采用版本号/时间戳来区分两次相同值。比如 AtomicStampedReference。

## 工具
理解了并发的模型、思路和模式之后，再来看并发工具如何实现。Java 并发包里的绝大多数同步工具都是基于 CAS 和 AQS 的。因此，深入理解 CAS 和 AQS 是非常重要的。


#### AQS

实现 Java 同步工具的基本框架，也是整个 Java 并发包的核心基础类。AQS 实现了“根据某种许可获取的情况将线程入队/出队以及相应的线程阻塞/唤醒”的通用机制，而将何时入队/出队（是否能够获得许可）的控制权交给了库的使用者。AQS 支持按照中断（互斥）或者超时两种模式来获取/释放许可，协调线程执行顺序。

AQS 包含一个同步队列和一个条件队列。两个队列都是基于链表实现的。

* 同步队列：CLH 变体，双向链表实现的队列，从尾部入队，从头部出队。入队是针对尾节点 tail 的 CAS 操作，将 tail 赋给为入队线程创建的新节点；出队则是更新首节点 head。同步队列初始化时，需要对 head 进行 CAS 操作。head 节点相当于一个哨兵元素，head 节点没有 prev 和 thread ，且 waitStatus 不会为 CANCELLED。同步队列的遍历往往是从 tail 开始往前遍历。
* 条件队列：采用单链表，互斥模式。ConditionObject 对象实现了条件等待/通知机制。调用 await 方法时会从同步队列转移到条件队列，调用 signal 唤醒方法时则从条件队转移到同步队列。
* 两者联系：同步队列和条件队列复用了相同的链表节点，通过链表节点上的节点指针来标识节点在哪个队列上。同步用来获取锁，而条件队列在获取锁的基础上用来实现在特定条件的等待/唤醒，两者可以配合使用。
链表节点包含如下成员：

被阻塞或等待唤醒的线程 Thead 。
* 节点状态 waitStatus 。 CANCELLED -- 超时或中断取消，一旦进入, 就不可改变； SIGNAL -- 需要唤醒后继节点 , CONDITION -- 线程等待唤醒, PROPAGATE -- acquireShare 需要无条件传播下去；处于 CANCELLED 的节点是不可被阻塞或唤醒的，因此在阻塞或唤醒时需要遍历跳过 CANCELLED 节点。
* 实现同步队列的节点指针 head, tail ; prev, next 。prev 用来处理取消，通过 prev 的节点状态来判断当前线程该如何处理；next 当前节点释放时需要唤醒它的 next 节点，CANCELLED 节点的 next 是它自身。由于前驱或后继节点可能因为超时或中断已被取消，因此需要遍历来找到第一个没有取消的前驱或后继节点。
* 实现条件队列的节点指针 firstWaiter, lastWaiter ; nextWaiter 。nextWaiter 在条件队列中指向下一个节点，或者指向 Share 节点。
* 如前所述，AQS 实现了通用的入队/出队以及相应的阻塞/唤醒机制，那么何时会入队/出队呢？这就是自定义方法的作用了。使用 AQS 开发同步工具，需要定义好 state 的同步语义，实现如下方法：tryAcquire/tryRelease，tryAcquireShared/tryReleaseShared，isHeldExclusively。


#### AtomicXXX

原子类，提供基本数据类型的原子化更新操作。通过 volatile variable + offset (字段的固定的内存地址偏移量) + Unsafe 来获取的状态字段的可见值，CAS 实现原子操作，适用于计数、安全引用更新等。可阅读 AtomicInteger 和 LongAdder 的实现。


#### ReentrantLock

Protected Lock 模式的一种实现。基于 CAS 和 AQS 实现，提供公平锁 FairSync 和非公平锁 NonfairSync。默认非公平锁。非公平锁吞吐量更高，公平锁倾向于访问授予等待时间最长的线程，吞吐量可能较低，适合防线程饥饿上波动小一点。

* ReentrantLock 的 lock 实现默认委托给 NonfairSync，该类继承 AQS 来实现锁机制。
* nonfairTryAcquire: 分为两种情况处理 -- 线程第一次获取锁和已经获取锁。
* tryRelease：分两种情况处理 -- 最后一次释放锁和多次获取锁后的某一次释放。
* state 同步语义： state > 0 表示已有线程获取锁的许可数，只有获取锁的线程能够继续获取锁或者释放锁； state = 0 表示线程可以去获取锁。
ReentrantLock 可以返回一个ConditionObject 对象，用作条件等待阻塞和唤醒。

* CopyOnWriteArrayList 基于 array + ReentrantLock + System.arraycopy 实现，读多写少场景。读列表不加锁，更新列表使用 ReentrantLock 进行保护性访问。
* ArrayBlockingQueue 使用一个 ReentrantLock 及一对 Condition ( notEmpty & notFull ) 对队列进行保护性访问，并在队列空/满时阻塞相应线程，在队列非空/非满时唤醒相应线程。

ConcurrentHashMap

HashMap 的并发加锁版。要点如下：

* 为保证高并发，使用了分段锁机制，每个桶关联一个锁；
* 定位桶索引时使用 CAS ，因为定位桶索引是一个轻量操作；
* 访问某个桶的数据时使用分段锁(synchronized(tab)) ；
* 链表冲突转换为红黑树时，插入新节点后将树转平衡时使用 CAS 。
* ConcurrentHashMap 可用于并发环境中的缓存实现。
ConcurrentHashMap 体现了一些提升并发性能的技巧：减少串行化部分的耗时、减少持锁逻辑耗时（降低锁粒度）、减少锁竞争程度（数据分段及分段锁）。使用多个细粒度锁交互时要注意防止死锁。


#### ThreadLocal

ThreadLocal 类里维护了一个哈希表 ThreadLocalMap[ThreadLocal, Value] ，每个线程都持有一个对 ThreadLocalMap 的引用，在该线程里调用 ThreadLocal.setInitialValue 方法时被初始化。当调用某个 ThreadLocal 对象的 set 方法时，会先获取当前线程，然后将当前线程的 TheadLocal 对象及对应的值写入所持有的 ThreadLocalMap 中。ThreadLocal 对象的哈希码值是通过一个 AtomicInteger 每次自增 0x61c88647 得到的。0x61c88647 是斐波那契乘数，可保证哈希散列分布均匀一些。

ThreadLocal 在一个长流程中存储需要的 Context 。ThreadLocal 使用要注意的问题：

* 内存泄露。由于 ThreadLocalMap 的 key 是弱引用，ThreadLocalMap 是强引用对象，当 key 被回收时，对应的 value 可能不会被回收，会造成内存泄露；
* ThreadLocal 与线程池联合使用时，退出线程前必须清除残留的 ThreadLocal 变量数据。

#### 线程池

线程池是受控的可执行多任务的线程管理器。Java 线程池实现是 ThreadPoolExecutor。 线程池的主要组成部分如下：

* 一个阻塞任务队列，用来存放待处理的任务 BlockingQueue[Runnable] workQueue；关联任务拒绝策略 RejectedExecutionHandler handler，当队列满时如何处理后面的任务请求。
* 一个线程工厂 threadFactory，用来生产和标识线程，可以做一点线程定制化的事情；
* 一组可控的复用和回收的工作线程 Set[Worker] works；关联访问工作线程的可重入锁 ReentrantLock mainLock；
* 线程池的配置：核心线程数、最大允许线程数、最小允许线程数、最大线程空闲时间。
线程池的实现要点如下：

* 线程池总状态控制 ctl : （3位 runState rs, 29 位 workCount wc）。 ctl = rs | wc。rs 用来表示线程池的状态：RUNNING-- 运行，可以接受新任务； SHUTDOWN -- 关闭，不接受新任务，但可以运行队列中任务；STOP -- 停止，不接受新任务，中断所有正运行的任务；TIDYING -- 线程池已空，将运行 terminated 钩子方法；TERMINATED -- terminated 方法执行完成，线程池彻底终止。技巧：1. 将多个值打包到一个值的技巧；2. 状态值递增，有利于状态的判断。
* worker：用来执行任务。同时继承 AQS 根据 0 & 1 状态实现了简单的非重入互斥锁，这可以防止某些中断，这些中断旨在唤醒等待任务的工作线程，而不是中断正在运行的任务。
* workers & mainLock : 配合起来访问工作线程集合，用来做线程统计，以及线程池终止时防止中断风暴。技巧：轻量级并发访问容器里的对象。
* 任务运行： run(Worker) 方法。使用 Protected Lock 模式。
* 线程池终止：SHUTDOWN -> STOP -> TIDYING -> TERMINATED。
* 扩展：可以继承 ThreadPoolExecutor，并覆写 beforeExecute 和 afterExecute 方法，定义在任务执行之前和执行之后的行为。可以用来申请/释放资源、打日志等。

## 陷阱
要做到并发的准确与安全，需要非常小心地避免一些常见陷阱：

“[设计原理:基本陷阱、原理及解决方案](./concurrency-faq.md)”
## 应用
#### InnoDB锁

* InnoDB 使用锁机制实现事务隔离性级别。避免：脏读（读到未提交数据）、不可重复读（两次查询读到不一致的数据）、幻读（两次查询读到不一样的行）。丢失更新问题需要应用层来控制。InnoDB 锁主要有行锁、页锁和表锁。
* 表锁：开销小，加锁快，锁粒度最大，冲突概率高，并发度低，不会死锁。使用表锁的情况：没有索引时，更新数据会锁表；串行化隔离级别会锁表; 部分 DDL 会锁表或者阻塞写，不要在业务高峰期进行。
* 行锁：开销小，加锁慢，锁粒度最小，冲突概率较低，并发度较高，会死锁。InnoDB 行锁是通过给索引树上的索引项加锁来实现的。有索引时，锁定读会锁行，更新数据行会锁行。行锁可分为共享锁（读锁、S 锁）和排他锁（写锁、X 锁）。 S 锁与 S 锁可以并发，其它都需要等待已有锁的释放。
* 锁定读：select … for update （X 锁）, select … lock in share mode（S 锁）。 自增长键的锁使用 X 锁定读；外键列的 SELECT 会生成 S 锁定读。
* 自增长键的锁。AUTO-INC Locking --- 含自增长键的表逐渐插入记录时，会生成 select for update 的加锁读。 特殊表锁机制，锁在完成 SQL 插入语句之后立即释放，而不是等事务执行完成后释放。MySQL 5.1.22 之后提供了一种轻量级互斥量的机制，来实现自增长值插入的性能提升。innodb_autoinc_lock_mode 参数可以选择使用何种机制。默认值为 1 ，对于插入前可以确定插入行数的 simple inerts ，使用互斥量机制，不能确定行数的使用 AUTO-INC Locking 机制。innodb_autoinc_lock_mode = 2 时，始终使用 AUTO-INC Locking 机制，性能最优，但容易导致不一致问题。
* 外键列：外键列的 SELECT 会对父表中的相应行加 S 锁。如果父表中的相应行已经有 X 锁，则外键的 SELECT 需要等待锁释放后才能执行。
* 行锁算法：Record 锁、Gap 锁、Next-Key 锁。Record 锁通常是索引列的读写引起，锁定行记录本身；Gap 锁定范围边界但不锁定记录；Next-Key 锁是 Record + Gap 的结合，右闭区间，锁定范围内的记录以及范围右端的记录，但不锁定左端的记录，可以防止幻读。InnoDB 默认隔离级别是 Repeatable Read ，该级别下，辅助索引的默认行锁是 Next-key 锁；若查询列为唯一索引列时，Next-Key 锁会降级为 Record 锁。

#### 分布式锁

* 锁的要求： 容易替换实现、可重入、高性能、高可用。实现时要考虑异常（应用宕机、网络延时与中断、集群节点宕机等）。
* 基本思想： 锁 + 超时 + 持锁线程的唯一标识 + 加锁/释放锁的必要检测。通常使用 Redis, ZK 实现。
* 锁释放： 1. 需要加超时，避免线程不响应时无法释放锁； 2. 加锁时必须加该线程的标识信息，避免释放锁时释放错误。考虑这样一种情况：线程 A 申请了带超时的锁 l ，因某种原因被阻塞或者不响应，锁 l 因超时被释放，被线程 B 申请到； 接着 A 从阻塞或不响应中恢复过来，释放原来申请的锁，如果锁没有线程标识的信息，就很可能把 B 申请的锁给释放掉了。这就是说，释放锁时需要严格的检测。
* Redis: 加锁 -- SET NX key unique_value EXPIRE_TIME ，若已持有锁则加 EXPIRE_TIME，如果 NX 和 EXPIRE_TIME 不同时在一起，当进程加锁后就崩溃，则该锁将无法释放；释放锁 -- get-and-del 使用 Lua 脚本保证原子性, if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) 。 可以使用 Redisson API ：”一文掌握 Redisson 分布式锁原理“
* ZK: 先创建一个持久化节点，当第一个客户端需要加锁时，在持久化节点下创建一个最小编号的临时顺序节点；后续要加锁的客户端依次创建编号次小的临时顺序节点，并对临近的前一个节点创建 watch 监听任务。 每个客户端释放锁时，都需要检测自己的节点编号是否是最小的那个，每次仅能释放编号最小的那个节点。当释放成功后，释放任务会触发下一个节点所关联的任务和客户端，这个客户端就可以拿到锁进行操作。当客户端崩溃时，这个节点也会被删除，后面的节点则依次往前挪一位。不同业务的锁采用不同的前缀。可使用 Curator SDK。
* 实现注意事项：1. 最好提供一个分布式锁的接口，隔离应用程序对具体实现的直接依赖； 2. 在加锁时考虑释放，避免使用者忘记释放锁； 3. 降级处理，比如 Redis 锁不可用时可降级为 DB 锁 或 ZK 锁； 4. 加锁和释放锁的监控（加锁和释放锁的时间、锁中业务执行时间、次数、并发量、失败次数等）。

## 挑战
#### 大流量

并发大流量是引起应用不稳定甚至将应用击溃的常见杀手之一。应对并发大流量的措施：1. 缓存，减少对后端存储压力；2. 降级，暂时移除非核心链路；3. 限流； 4. 架构升级，做到动静分离、冷热分离、读写分离、服务器分离、服务分离、分库分表、负载均衡、NoSQL 技术、（多机房）冗余、容器化、上云。


#### 不一致

由于任务顺序的不确定性及脑力思考的局限性，加上大流量，在少许情形下，可能会触发程序的细微 BUG， 引起数据的不一致。

由于人力的有限性，对于高并发引起的不一致，最好能构建准实时的监控、对账、补偿和对账报表。


#### 死锁

多个线程同时要获取多个类型的共享资源时，申请锁的顺序不当，可能导致死锁。

四要件：1. 互斥、请求与保持、不可剥夺、循环等待；
解决方案： 1. 加锁超时释放，破坏不可剥夺； 2. 加锁顺序控制，破坏循环等待； 3. 使用等待图来检测死锁。


