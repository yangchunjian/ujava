---
title: 设计原理:基本陷阱、原理及解决方案
index: false
icon: laptop-code
category:
  - 设计原理
---

## 简介

为什么要使用并发 ？ 有三点足够信服的理由：

性能提升。单核 CPU 的性能基本抵达瓶颈，充分挖掘多核 CPU 的能力，使得性能提升变成水平可扩展的。
事件本质。世界的事件本质上是并行和并发进行的。
响应灵敏。为了构建响应更敏捷的应用，需要异步化处理，并发必不可少。
不过，并发使用姿势不当，很容易出错，导致难以估量的损失。可谓是一把双刃剑。

最近，团队有同学踩了并发的坑。我想，要不梳理下并发的一些陷阱及相关原理和解决方案吧，以备后用。

## 何时使用并发

并不是在所有情况下都需要使用并发。Java 多线程模型，在并发执行的时候会有线程创建、切换、阻塞、调度的开销、内存同步的开销等。

在单核 CPU 上，运行 CPU 密集型计算，并不需要使用并发，因为 CPU 本身就是饱和的，使用并发只能带来不必要的线程切换和同步开销。
在多核 CPU 处理器上，运行 CPU 密集型计算，线程数应该与 CPU 个数一样，以便于将工作合理分配到每个 CPU 上，不多不少。 如果线程数大于
CPU 核数，那么就会有不必要的线程切换；如果线程数小于 CPU 核数，就无法充分利用所有的核。

实际应用中，常常是 RPC 调用和纯计算业务逻辑处理的交替执行，也就是 IO 密集型，或者 IO 和 CPU 密集型交叉的任务，则需要线程数远远大于
CPU 核数，来避免 线程等待 IO 操作完成之前的无所事事。

#### 线程安全

要讨论并发问题，首先要理解，何为线程安全的 ？ 详解可参阅《Java并发编程实战》的第二章。

线程安全，是指在多线程执行环境下，并发执行的结果与串行执行的结果始终一致。 这句话有两层意思： 1. 不会因为线程执行顺序不确定，导致不确定的结果；2.
多线程并发执行的结果，应该与多线程串行执行的结果一致。它们的差别仅仅体现在速度上，而不是结果上。

在具体措施上，表现为多线程对“含有共享可变状态的对象”的访问控制与同步。这里有两个前提： 1. 多线程。 单线程执行环境是线程安全的；
2. 共享可变。 不可变的对象是线程安全的；没有任何写操作的共享可变对象是线程安全的； 3. 无状态的对象是线程安全的。

多线程环境下，保证并发安全的若干理念：

从一开始设计成线程安全的类，比在以后将类修改成线程安全的类，要更容易和安全得多。因为线程不安全的类，在实际业务系统中可能已经在各种场景下使用到了，修改成线程安全的类，会导致性能下降，产生不可预知的后果。

程序状态的封装性越好，就越容易实现线程安全的访问，也更容易维护。

优先考虑使用现有的线程安全的类和同步工具类。

使用不可变量和无状态对象（通常是应用中的全局无状态组件）。

不共享变量，比如尽量使用方法内的局部变量，或者声明组件为原型模式。

规定哪些操作组合必须符合原子性，并借助同步和锁来实现组合操作的原子性。

## 并发陷阱

#### “写-读”的不可见

#### 示例

如下代码一所示。先起一个线程，将 isReady 设置为 true ，然后再进入循环，判断 isReady 是否为 true ，为 true 则退出。

这段代码是线程安全的吗？ 如何判断 ？ 不妨假设这两个线程按照代码顺序串行执行。那么，打印 ready! 之后，不应该有 not ready 的打印。

代码一:

```java
public class NoVisibility {

    private boolean isReady = false;

    public void ready() {
        isReady = true;
    }

    public boolean isReady() {
        return isReady;
    }

    static class NoVisibilityTester {
        public static void main(String[] args) {
            NoVisibility noVisibility = new NoVisibility();
            new Thread(() -> {
                noVisibility.ready();
                System.out.println(System.nanoTime() + ": ready!");
            }).start();
            while (true) {
                if (noVisibility.isReady()) {
                    System.out.println(System.nanoTime() + ": main thread now is ready");
                    break;
                }
                System.out.println(System.nanoTime() + ": not ready");
            }
            System.out.println(System.nanoTime() + ": now exit");
        }
    }
}

```

运行多次，得到如下结果。打印 ready! 之后，还有 not ready 的输出。这是为什么呢？

```java
167774951548450:ready!
        167774951549923:not ready
        167774951822008:main thread now is ready
        167774951857190:now exit

```

#### 原理及解决方案

这里涉及到并发读写的最最基本的陷阱：可见性。根据 “Jvm内存模型深度理解”，当线程更新 isReady
之后，只是写到自己的线程缓存里，并没有立即刷新到主内存中。那么主线程需要等待一段时间，才能检测到主内存的 isReady 已经变化了。

如果不打算使用锁的话，可以加上可见性修饰符：volatile 。 volatile 会立即将更新的线程缓存值刷新到主内存中，使得所有访问该共享变量的线程都能立即感知到新的值。volatile
是一个极轻量级的同步机制，常用于判断标志位是否更新。但是 volatile 并不适合做同步锁（基于 volatile 的同步是很脆弱的）。

#### 含有未受保护实例变量的对象

#### 示例

一个含有未受保护的实例变量的对象，在多线程环境中访问是不安全的。这大概是关于并发陷阱的最经典的栗子。

如代码二所示：一个 UnSafeObject 含有一个实例变量 i 。在 main 中，创建了 3 个线程，分别会设置 i，然后休眠 200ms ，再获取 i 。

这是线程安全的吗 ？ 按照上述定义来看，如果并发与串行执行结果一致，那么应该是：每个线程都会拿到与自己线程号对应的值。至少不会拿到其他的线程号。

代码二：

```java

@Setter
@Getter
public class UnSafeObject {

    private int i = 0;

    public static void main(String[] args) {
        UnSafeObject unSafeObject = new UnSafeObject();

        ThreadStarter.startMultiThreads(
                (ti) -> {
                    unSafeObject.setI(ti);
                    try {
                        TimeUnit.MILLISECONDS.sleep(200);
                    } catch (InterruptedException e) {
                    }
                    System.out.println("Thread" + ti + ":" + unSafeObject.getI());
                }
        );
    }
}

```

打印结果如下：很明显，每个线程拿到的值并不一定是它自己设置的。因为在多线程环境下，i 可能被任何一个线程所修改。

```java
Thread2:2
        Thread1:2
        Thread0:2
        Thread2:0
        Thread1:0

```

#### 原理及解决方案

导致对象 UnSafeObject 的实例变量 i 在多线程环境下访问不安全的原因是：JVM 并发机制是基于共享内存模型的。可阅：“Jvm内存模型深度理解”。
这篇文章讲得详细。

怎样才能将 UnSafeObject 变成线程安全的呢 ？ 最简便的方式是，将 i 声明为原子的 AutoInteger。 当只需要一个单变量的原子操作时，使用原子类。

原子类采用的是基于硬件能力提供的 CAS ，可以安全替代 volatile 的使用。在竞争适度（如何衡量?）的情况下， CAS 能够提供更好的性能和可伸缩性。
CAS 有个“ABA”的问题，可以通过增加一个版本号来解决。 CAS 是非阻塞算法，是乐观锁的实现方式。在实际系统中也经常会用到，比如 DB
的乐观锁，ES 版本控制等。通过问题转换，将并发修改的范围映射到原子变量的修改上，可以拓展非阻塞并发的使用范围。

详情可阅：《并发编程实战》的第十五章。

#### 真实环境

对于这样一个简单例子，大家耳熟能详。不过，换到真实环境里，还能看出来么？ 如下代码三所示。这段代码有什么问题呢？
LightTcOrderFormat 是一个含有实例变量 tcOrder 的 Component。 咋一看，确实没啥问题。但是，如果放在多线程环境里跑一跑，tcOrder
就会被随意篡改。

代码三：

```java

@Slf4j
@Component
public class LightTcOrderFormat extends LightTcOrderDTO implements LightFormat {
    private TcOrder tcOrder;

    @Override
    public LightResultDTO format(WholeOrderSet wholeOrderSet, LightResultDTO lightResultDTO) {
        // code ... 
        this.tcOrder = wholeOrderSet.getTcOrder();
        LightTcOrderDTO lightTcOrderDTO = new LightTcOrderDTO();
        BeanUtils.copyProperties(wholeOrderSet.getTcOrder(), this);
        BeanUtils.copyProperties(this, lightTcOrderDTO);
        lightResultDTO.setOrder(lightTcOrderDTO);
        return lightResultDTO;
    }
}

```

避免措施： LightTcOrderFormat 声明为原型模式：@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE) ，成为不共享的对象。

#### 原子操作组合的非原子化

#### 示例

如下代码四所示，使用了 ConcurrentHashMap 对 map 中的 [key,value] 进行保护。

输出 final 不一定等于 300000。为什么会这样呢？ 虽然 get 与 put 是原子操作，但是组合成一个 add 方法， add
方法是非原子化的。两个线程完全可能，同时执行 get("key") = 5 ； 然后先后 put("key", 6) ，使得最终值为 6， 而不是 7。

代码四：

```java
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class UnatomicOperation {

    private Map<String, Integer> map = new ConcurrentHashMap<>();

    public void add(String key) {
        Integer value = map.get(key);
        if (value == null) {
            map.put(key, 1);
        } else {
            map.put(key, value + 1);
        }
    }

    public void nonSafeAdd(String key) {
        map.put(key, map.putIfAbsent(key, 1) + 1);
    }

    public Integer get(String key) {
        return map.get(key);
    }

    public static void main(String[] args) {
        UnatomicOperation unatomicOperation = new UnatomicOperation();
        ThreadStarter.startMultiThreads(
                (ti) -> {
                    unatomicOperation.nonSafeAdd("key");
                    System.out.println(ti + ":" + unatomicOperation.get("key"));
                }
        );
        System.out.println("final: " + unatomicOperation.get("key"));
    }
}

```

有小伙伴问：那么写成这样可否 ？ 看看 putIfAbsent 的实现，就知道也是不可以的。因为后者只是比前者表达更加简洁，但效果是一致的。

```java
public void nonSafeAdd(String key){
        map.put(key,map.putIfAbsent(key,1)+1);
        }

```

#### 原理及解决方案

一系列原子操作组合后的复合操作，如果不具有原子化，也会有线程不安全的问题。

一种解决方案是，对对象的所有需要并发访问的方法使用 synchronized 关键字修饰。如果方法里的操作耗时都比较平均，不存在耗时很大的操作，这种方法最经济。详可阅：“深入理解
Synchronized”

同步锁，本质是封闭思想的一种体现。将对共享可变量的访问，限制在指定的同步方法或由锁构建的临界区中。

代码五：

```java
public class SychronizedOperation {

    private Map<String, Integer> map = new HashMap<>();

    public synchronized void add(String key) {
        Integer value = map.get(key);
        if (value == null) {
            map.put(key, 1);
        } else {
            map.put(key, value + 1);
        }
    }

    public synchronized Integer get(String key) {
        return map.get(key);
    }

    public static void main(String[] args) {
        SychronizedOperation sychronizedOperation = new SychronizedOperation();
        ThreadStarter.startMultiThreads(
                (ti) -> {
                    sychronizedOperation.add("key");
                    System.out.println(ti + ":" + sychronizedOperation.get("key"));
                }
        );

        System.out.println("final: " + sychronizedOperation.get("key"));
    }
}

```

问题：读操作也要加 synchronized 吗？ 为什么 ？

#### 锁优化

虽然使用 synchronized 解决了问题，但是稍有不当，会带来性能问题。 这里加在方法上，实际上就是对整个 map 加锁，而
ConcurrentHashMap 是有分段锁优化的，这样就将分段锁优化的优势给去掉了。 那么，如何在保存 ConcurrentHashMap 的优势基础上，安全地访问
key 呢？

这里实际上设计两层锁：1. 给 key 加锁，是分段的； 2. 给计数加锁。 这里可以将初始化的部分抽离出来单独加锁。如下代码六所示。使用
ConcurrentHashMap + AtomicLong 强强联合，来解决这个问题。ConcurrentHashMap 给 key 加分段锁，AtomicLong 给访问同一个 key 的
value 加锁；还有一个给 value 为空时的初始化加锁。

代码六：

```java
public class ConcurrentCombinedOperation {

    private Map<String, AtomicLong> map = new ConcurrentHashMap<>();

    private Lock lock = new ReentrantLock();

    public long addAndGet(String key) {
        if (lock.tryLock()) {
            try {
                map.putIfAbsent(key, new AtomicLong());
            } finally {
                lock.unlock();
            }
        }
        return map.get(key).incrementAndGet();
    }

    public long get(String key) {
        return map.get(key).get();
    }
}

```

如上代码所示，虽然将 get-put 中的 put 解放出来了，但是依然有两个不足：

无论 key 为何值，都会对整个 map 加锁；
只有一把可冲入锁，如果 key 很多，线程数也很多，那么竞争会非常激烈。事实上，上述代码执行有时会出现异常和线程直接退出，而且概率不小。
因此，还需要进一步进行优化。仔细思考可知，实际上只需要初始化（key 对应的 value 为空）的时候加锁即可。如代码七所示，使用 DCL
来安全初始化 key 对应的 AtomicLong 对象。

代码七：

```java
public long addAndGetEffective(String key){
        init(key);
        return map.get(key).incrementAndGet();
        }

private void init(String key){
        if(map.get(key)==null){
synchronized (key){
        if(map.get(key)==null){
        map.put(key,new AtomicLong());
        }
        }
        }
        }

```

问题：以上代码涉及到 key 的监控对象锁和分段锁，是否会出现死锁问题 ？

#### synchronized-VS-ReentrantLock

上述同步代码中，分别使用了 synchronized 和 ReentrantLock 。那么，它们有什么异同？如何在两者之间进行选择呢？ 以下是一些建议：

* synchronized 是 JVM 内置锁，ReentrantLock 不是。在未来的 JVM 版本中，更可能优化 synchronized 。
* synchronized 使用起来更简单紧凑，能够自动释放锁； ReentrantLock 则需要使用 try-final 块，手动在 finally
  中释放锁。ReentrantLock 更容易出错。
* ReentrantLock 具备更灵活的加锁能力：定时锁，可中断锁，非公平锁，非块结构加锁；而 synchronized 不具备这些特性。这是选择
  ReentrantLock 的重要理由。
* 不应该因为性能的缘故而选择 ReentrantLock 。因为 synchronized 的性能在 JVM 迭代中会不断提升，更受到 JVM 优化的青睐。
* 优先使用 synchronized。 仅当 synchronized 无法满足需要时，使用 ReentrantLock 。

#### 关联不一致性

原子操作组合的非原子化，还表现在一种常用情况：关联不一致性。也就是说，两个变量的变化，必须符合某种一致性规约。比如正方形的边长与面积，就是同步变化的。如下代码八所示。
最终输出情况，square 与 area 不一定会满足 area = square * square 的关系。

代码八：

```java
public class RelatedInconsistency {

    private int square;
    private int area;

    public RelatedInconsistency(int square) {
        this.square = square;
        computeArea();
    }

    public void set(int square) {
        this.square = square;
        computeArea();
        System.out.println("square: " + square + "  area:" + area);
    }

    private void computeArea() {
        this.area = this.square * this.square;
    }

    static class RelatedInconsistencyTest {
        public static void main(String[] args) throws InterruptedException {
            RelatedInconsistency relatedInconsistency = new RelatedInconsistency(1);
            ThreadStarter.startMultiThreads(3000, 10,
                    (th) -> relatedInconsistency.set(th)
            );
        }
    }
}

```

#### 逃逸的对象

#### 示例

如下代码九所示。你能看出问题所在吗 ？ add 也加了 synchronized 关键字。 看上去貌似是没有问题的。

代码九：

```java
public class EscapedObject {

    private List<Integer> nums = new ArrayList<>();

    private synchronized void add(Integer num) {
        if (num != null) {
            nums.add(num);
        }
    }

    public List<Integer> getNums() {
        return nums;
    }

    static class EscapedObjectTester {
        public static void main(String[] args) throws InterruptedException {
            EscapedObject escapedObject = new EscapedObject();
            escapedObject.add(5);
            List<Integer> escaped = escapedObject.getNums();
            ThreadStarter.startMultiThreads(3, 3,
                    (ti) -> {
                        escaped.add(ti * ti);
                        System.out.println(ti + ":" + escaped);
                    }
            );
        }
    }
}

```

输出结果如下。将线程数调大，抛出异常 ConcurrentModificationException 的概率会更大。

```java
1:[5,0,1]
        0:[5,0,1]
        1:[5,0,1,1]
        0:[5,0,1,1,0]
        1:[5,0,1,1,0,4,1]
        0:[5,0,1,1,0,4,1,0]
        Exception in thread"Thread-2"java.util.ConcurrentModificationException
        at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:901)

```

#### 原理及解决方案

为什么还会抛并发修改的异常呢 ？ getNums 闯了祸。这个方法将不安全的 nums 暴露出去了。 换个角度说， nums 通过 getNums
这个方法逃逸出去了。 这样 nums 就可能被多个线程同时更改了。

解决方案：1. 不对外暴漏这个实例变量，仅可通过指定方法访问（封闭的思想）；2. 如果需要获取这个 nums
，使它变成不可变的。不允许逃逸出去的对象被修改。这实际上遵循了“不可变量总是线程安全的”原理。

```java
public List<Integer> getImmutableNums(){
        return Collections.unmodifiableList(nums);
        }

```

事实上，即使返回不可变的 List， List 里的对象依然是线程不安全的。因为 List 的逸出，连带着将 List 里的对象也逸出了。
因此，对于容器的并发，避免将整个容器都返回出去。

#### 非受控的线程池

#### 示例

这个问题恐怕是很少人会特别注意到的陷阱。在调用频繁的实例方法中创建线程池，会导致创建线程数不受控地增长，最终导致应用崩溃。

如下代码十所示。在局部方法 freqCalledMethod 不断创建新的局部线程池。只要方法调用足够次数，就会导致应用崩溃。

代码十：

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class UncontrolledLocalThreadPool {

    public static void main(String[] args) {
        int n = 100000;
        for (int i = 0; i < n; i++) {
            freqCalledMethod();
        }
        System.out.println("here");
    }

    public static void freqCalledMethod() {
        ExecutorService threadExecutor = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 10; i++) {
            threadExecutor.submit(() -> 9999L * 9999L);
        }
    }
}

```

报：

```java
Exception in thread"main"java.lang.OutOfMemoryError:unable to create new native thread

```

#### 原理及解决方案

报这个错误的原因是超出了JVM允许创建的最大线程数。

The "java.lang.OutOfMemoryError: unable to create new native thread" is thrown by the JVM whenever it hit the limit of
how many threads it can create. The limit is imposed by the operating system.

线程池原本是用来使得应用中创建的线程数是可控的，结果线程池的创建变得不可控了，显然也会导致线程数不可控。

解决方案：切忌在大量频繁调用的实例方法里创建线程池。创建配置良好的全局线程池。

可以通过如下程序来测试机器上的最大可创建线程数。TimeUnit.SECONDS.sleep(1000); 是为了不让线程过快的退出。

代码十一：

```java
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class ThreadMaxCount {
    private static AtomicInteger count = new AtomicInteger();

    public static void main(String[] args) throws InterruptedException {
        while (true) {
            new Thread(() -> {
                try {
                    TimeUnit.SECONDS.sleep(1000);
                } catch (InterruptedException e) {
                }
            }).start();
            System.out.println("thread num:" + count.incrementAndGet());
            TimeUnit.MILLISECONDS.sleep(10);
        }
    }
}

```

## 线程池中的ThreadLocal残留

#### 示例

如果你有一个比较长的业务链路，有一些公共数据要在整个链路中传递。要么，将公共数据放在方法中逐层传递下去，要么创建一个
ThreadLocal 来保存这些公共数据，在链路里传递。

ThreadLocal 是线程本地副本，每个线程有自己私有的一份数据。通过不共享的思路去避免并发修改问题。不过 ThreadLocal
如果与线程池结合使用，就会有问题。

代码十二：

```java
public class ThreadLocalLeak {

    private ThreadLocal<Integer> context = new ThreadLocal();

    public ThreadLocalLeak(Integer initValue) {
        context.set(initValue);
    }

    public Integer get() {
        return context.get();
    }

    public void set(Integer initValue) {
        context.set(initValue);
    }

    public void clear() {
        context.remove();
    }

    public static void main(String[] args) throws InterruptedException {
        ThreadLocalLeak threadLocalLeak = new ThreadLocalLeak(5);
        ExecutorService executor = Executors.newFixedThreadPool(10);

        executor.execute(
                () -> {
                    for (int i = 0; i <= 100000; i++) {
                        System.out.println(System.nanoTime() + " set before:" + Thread.currentThread() + ": " + threadLocalLeak.get());
                        threadLocalLeak.set(i);
                        System.out.println(System.nanoTime() + " set after:" + Thread.currentThread() + ": " + threadLocalLeak.get());
                        //threadLocalLeak.clear();
                    }
                }
        );

        executor.shutdown();
        executor.awaitTermination(3000, TimeUnit.SECONDS);

    }
}

```

输出结果如下：

#### 原理及解决方案

要理解 ThreadLocal 的实现，关键是理解 Thread 中含有一个 ThreadLocal.ThreadLocalMap 对象。这个对象实际上就是线程的本地副本。
之所以不直接用 Object, 是因为要实现两个目标： 1. 安全。 使用泛型来存取副本对象，编写代码更加安全，避免强制类型转换； 2.
需要存储多个值。ThreadLocalMap 的 Key 是一个 WeakReference[ThreadLocal] ，ThreadLocal 通过 AtomicInteger 实现了 hashCode
的约定，并提供了方法来获取当前执行线程的本地副本的值。

当线程在线程池中被复用时，执行下一次任务时，就可能拿到上一次任务执行后的残留数据了。

解决方案：在线程执行完任务后，将 ThrealLocal 中的内容清空。

#### 手动的同步代码

#### 示例

为了测试并发陷阱，需要启动多线程去执行任务。为避免写重复代码，需要先写个通用的多线程启动代码。如代码十三所示。这段代码使用了
t.join 方法来同步线程之间的活动，使主线程必须在所有子线程执行之后才退出。 这样做并没有多大问题。不过，使用比较底层的 API
比使用成熟的同步工具类，会更有风险。

代码十三：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ThreadStarter {

    public static void startMultiThreads(Consumer<Integer> consumer) {

        try {
            startMultiThreads(3, 100000, consumer);
        } catch (InterruptedException e) {
            System.err.println("error: " + e.getMessage());
        }
    }

    public static void startMultiThreads(int threadNum, int times, Consumer<Integer> consumer) throws InterruptedException {
        List<Thread> threadList = new ArrayList<>();
        for (int t = 0; t < threadNum; t++) {
            int threadIndex = t;
            Thread th = new Thread(() -> {
                for (int i = 0; i < times; i++) {
                    consumer.accept(threadIndex);
                }
            });
            threadList.add(th);
            th.start();
        }
        for (Thread t : threadList) {
            t.join();
        }
    }
}

```

#### 原理及解决方案

这里需要一个“栅栏”：当所有线程都到达这个栅栏的时候，才触发后续的活动。这实际上是个通用的功能。使用 CountDownLatch 工具来实现更佳。

如代码十四所示。启动线程引用了 CountDownLatch 对象。当线程执行完成退出时，就将 CountDownLatch 计数减一。当 CountDownLatch
计数为 0 时，就会释放栅栏，让等待的主线程通过。

代码十四：

```java
public static void startMultiThreadsV2(int threadNum,int times,Consumer<Integer> consumer)throws InterruptedException{
        CountDownLatch countDownLatch=new CountDownLatch(threadNum);
        for(int i=0;i<threadNum; i++){
        new Thread(
        new Worker(countDownLatch,consumer,i,times),"t"+i
        ).start();
        }
        countDownLatch.await();
        }

static class Worker implements Runnable {

    private CountDownLatch countDownLatch;
    private Consumer consumer;
    private int threadIndex;
    private int times;

    public Worker(CountDownLatch countDownLatch, Consumer consumer,
                  int threadIndex, int times) {
        this.countDownLatch = countDownLatch;
        this.consumer = consumer;
        this.threadIndex = threadIndex;
        this.times = times;
    }

    @Override
    public void run() {
        for (int i = 0; i < times; i++) {
            consumer.accept(threadIndex);
        }
        countDownLatch.countDown();
    }
}

```

#### 根因讨论

Java 并发的这些陷阱，从根本上去追溯，都是由共享内存模型所带来的。如果换用基于消息投递的方式,
自然就不存在这些问题了，当然，消息投递又会带来新的问题：比如消息接收不到，消息延迟，处理的异步化，反直觉的编程模型等。

从根因上去探索，换一种思路和做法，看到的空间更为广阔。