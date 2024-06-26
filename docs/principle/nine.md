---
title: 定时器
icon: laptop-code
category:
  - 设计原理
---

## 简介

从单机角度，定时任务实现主要有以下 3 种方案：

* while + sleep 组合
* 最小堆实现
* 时间轮实现

## while+sleep组合
while+sleep 方案，简单的说，就是定义一个线程，然后 while 循环，通过 sleep 延迟时间来达到周期性调度任务。

简单示例如下：
```java
public static void main(String[] args) {
    final long timeInterval = 5000;
    new Thread(new Runnable() {
        @Override
        public void run() {
            while (true) {
                System.out.println(Thread.currentThread().getName() + "每隔5秒执行一次");
                try {
                    Thread.sleep(timeInterval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }).start();
}
```

实现上非常简单，如果我们想在创建一个每隔3秒钟执行一次任务，怎么办呢？

同样的，也可以在创建一个线程，然后间隔性的调度方法；但是如果创建了大量这种类型的线程，这个时候会发现大量的定时任务线程在调度切换时性能消耗会非常大，而且整体效率低！

面对这种在情况，大佬们也想到了，于是想出了用一个线程将所有的定时任务存起来，事先排好序，按照一定的规则来调度，这样不就可以极大的减少每个线程的切换消耗吗？

正因此，JDK 中的 Timer 定时器由此诞生了！

## 三、最小堆实现
所谓最小堆方案，正如我们上面所说的，每当有新任务加入的时候，会把需要即将要执行的任务排到前面，同时会有一个线程不断的轮询判断，如果当前某个任务已经到达执行时间点，就会立即执行，具体实现代表就是 JDK 中的 Timer 定时器！

#### 3.1、Timer
首先我们来一个简单的 Timer 定时器例子
```java
public static void main(String[] args) {
    Timer timer = new Timer();
    //每隔1秒调用一次
    timer.schedule(new TimerTask() {
        @Override
        public void run() {
            System.out.println("test1");
        }
    }, 1000, 1000);
    //每隔3秒调用一次
    timer.schedule(new TimerTask() {
        @Override
        public void run() {
            System.out.println("test2");
        }
    }, 3000, 3000);

}
```

实现上，好像跟我们上面介绍的 while+sleep 方案差不多，同样也是起一个TimerTask线程任务，只不过共用一个Timer调度器。

下面我们一起来打开源码看看里面到底有些啥！

进入Timer.schedule()方法
> 从方法上可以看出，这里主要做参数验证，其中TimerTask是一个线程任务，delay表示延迟多久执行（单位毫秒），period表示多久执行一次（单位毫秒）

```java
public void schedule(TimerTask task, long delay, long period) {
    if (delay < 0)
        throw new IllegalArgumentException("Negative delay.");
    if (period <= 0)
        throw new IllegalArgumentException("Non-positive period.");
    sched(task, System.currentTimeMillis()+delay, -period);
}
```


* 接着看sched()方法
> 这步操作中，可以很清晰的看到，在同步代码块里，会将task对象加入到queue

```java
private void sched(TimerTask task, long time, long period) {
    if (time < 0)
        throw new IllegalArgumentException("Illegal execution time.");

    // Constrain value of period sufficiently to prevent numeric
    // overflow while still being effectively infinitely large.
    if (Math.abs(period) > (Long.MAX_VALUE >> 1))
        period >>= 1;

    synchronized(queue) {
        if (!thread.newTasksMayBeScheduled)
            throw new IllegalStateException("Timer already cancelled.");

        synchronized(task.lock) {
            if (task.state != TimerTask.VIRGIN)
                throw new IllegalStateException(
                    "Task already scheduled or cancelled");
            task.nextExecutionTime = time;
            task.period = period;
            task.state = TimerTask.SCHEDULED;
        }

        queue.add(task);
        if (queue.getMin() == task)
            queue.notify();
    }
}

```


* 我们继续来看queue对象
> 任务会将入到TaskQueue队列中，同时在Timer初始化阶段会将TaskQueue作为参数传入到TimerThread线程中，并且起到线程
```java
public class Timer {

    private final TaskQueue queue = new TaskQueue();

    private final TimerThread thread = new TimerThread(queue);

    public Timer() {
        this("Timer-" + serialNumber());
    }

    public Timer(String name) {
        thread.setName(name);
        thread.start();
    }

    //...
}

```


* 而TaskQueue其实是一个最小堆的数据实体类，源码如下
> 每当有新元素加入的时候，会对原来的数组进行重排，会将即将要执行的任务排在数组的前面
```java

class TaskQueue {
    
    private TimerTask[] queue = new TimerTask[128];


    private int size = 0;

    void add(TimerTask task) {
        // Grow backing store if necessary
        if (size + 1 == queue.length)
            queue = Arrays.copyOf(queue, 2*queue.length);

        queue[++size] = task;
        fixUp(size);
    }

    private void fixUp(int k) {
        while (k > 1) {
            int j = k >> 1;
            if (queue[j].nextExecutionTime <= queue[k].nextExecutionTime)
                break;
            TimerTask tmp = queue[j];
   queue[j] = queue[k];
   queue[k] = tmp;
            k = j;
        }
    }
 
 //....
}
```


* 最后我们来看看TimerThread
TimerThread其实就是一个任务调度线程，首先从TaskQueue里面获取排在最前面的任务，然后判断它是否到达任务执行时间点，如果已到达，就会立刻执行任务
```java
class TimerThread extends Thread {

    boolean newTasksMayBeScheduled = true;

    private TaskQueue queue;

    TimerThread(TaskQueue queue) {
        this.queue = queue;
    }

    public void run() {
        try {
            mainLoop();
        } finally {
            // Someone killed this Thread, behave as if Timer cancelled
            synchronized(queue) {
                newTasksMayBeScheduled = false;
                queue.clear();  // Eliminate obsolete references
            }
        }
    }

    /**
     * The main timer loop.  (See class comment.)
     */
    private void mainLoop() {
        while (true) {
            try {
                TimerTask task;
                boolean taskFired;
                synchronized(queue) {
                    // Wait for queue to become non-empty
                    while (queue.isEmpty() && newTasksMayBeScheduled)
                        queue.wait();
                    if (queue.isEmpty())
                        break; // Queue is empty and will forever remain; die

                    // Queue nonempty; look at first evt and do the right thing
                    long currentTime, executionTime;
                    task = queue.getMin();
                    synchronized(task.lock) {
                        if (task.state == TimerTask.CANCELLED) {
                            queue.removeMin();
                            continue;  // No action required, poll queue again
                        }
                        currentTime = System.currentTimeMillis();
                        executionTime = task.nextExecutionTime;
                        if (taskFired = (executionTime<=currentTime)) {
                            if (task.period == 0) { // Non-repeating, remove
                                queue.removeMin();
                                task.state = TimerTask.EXECUTED;
                            } else { // Repeating task, reschedule
                                queue.rescheduleMin(
                                  task.period<0 ? currentTime   - task.period
                                                : executionTime + task.period);
                            }
                        }
                    }
                    if (!taskFired) // Task hasn't yet fired; wait
                        queue.wait(executionTime - currentTime);
                }
                if (taskFired)  // Task fired; run it, holding no locks
                    task.run();
            } catch(InterruptedException e) {
            }
        }
    }
}
```

总结这个利用最小堆实现的方案，相比 while + sleep 方案，多了一个线程来管理所有的任务，优点就是减少了线程之间的性能开销，提升了执行效率；但是同样也带来的了一些缺点，整体的新加任务写入效率变成了 O(log(n))。

同时，细心的发现，这个方案还有以下几个缺点：

* 串行阻塞：调度线程只有一个，长任务会阻塞短任务的执行，例如，A任务跑了一分钟，B任务至少需要等1分钟才能跑
* 容错能力差：没有异常处理能力，一旦一个任务执行故障，后续任务都无法执行
#### 3.2、ScheduledThreadPoolExecutor
鉴于 Timer 的上述缺陷，从 Java 5 开始，推出了基于线程池设计的 ScheduledThreadPoolExecutor 。

![img_9.png](img_9.png)

其设计思想是，每一个被调度的任务都会由线程池来管理执行，因此任务是并发执行的，相互之间不会受到干扰。需要注意的是，只有当任务的执行时间到来时，ScheduledThreadPoolExecutor 才会真正启动一个线程，其余时间 ScheduledThreadPoolExecutor 都是在轮询任务的状态。

简单的使用示例：
```java
public static void main(String[] args) {
    ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(3);
    //启动1秒之后，每隔1秒执行一次
    executor.scheduleAtFixedRate((new Runnable() {
        @Override
        public void run() {
            System.out.println("test3");
        }
    }),1,1, TimeUnit.SECONDS);
    //启动1秒之后，每隔3秒执行一次
    executor.scheduleAtFixedRate((new Runnable() {
        @Override
        public void run() {
            System.out.println("test4");
        }
    }),1,3, TimeUnit.SECONDS);
}
```


同样的，我们首先打开源码，看看里面到底做了啥

* 进入scheduleAtFixedRate()方法
> 首先是校验基本参数，然后将任务作为封装到ScheduledFutureTask线程中，ScheduledFutureTask继承自RunnableScheduledFuture，并作为参数调用delayedExecute()方法进行预处理
```java
public ScheduledFuture<?> scheduleAtFixedRate(Runnable command,
                                              long initialDelay,
                                              long period,
                                              TimeUnit unit) {
    if (command == null || unit == null)
        throw new NullPointerException();
    if (period <= 0)
        throw new IllegalArgumentException();
    ScheduledFutureTask<Void> sft =
        new ScheduledFutureTask<Void>(command,
                                      null,
                                      triggerTime(initialDelay, unit),
                                      unit.toNanos(period));
    RunnableScheduledFuture<Void> t = decorateTask(command, sft);
    sft.outerTask = t;
    delayedExecute(t);
    return t;
}
```


* 继续看delayedExecute()方法
> 可以很清晰的看到，当线程池没有关闭的时候，会通过super.getQueue().add(task)操作，将任务加入到队列，同时调用ensurePrestart()方法做预处理
```java
private void delayedExecute(RunnableScheduledFuture<?> task) {
    if (isShutdown())
        reject(task);
    else {
        super.getQueue().add(task);
        if (isShutdown() &&
            !canRunInCurrentRunState(task.isPeriodic()) &&
            remove(task))
            task.cancel(false);
        else
   //预处理
            ensurePrestart();
    }
}
```

其中super.getQueue()得到的是一个自定义的new DelayedWorkQueue()阻塞队列，数据存储方面也是一个最小堆结构的队列，这一点在初始化new ScheduledThreadPoolExecutor()的时候，可以看出！
```java
public ScheduledThreadPoolExecutor(int corePoolSize) {
    super(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS,
          new DelayedWorkQueue());
}
```


> 打开源码可以看到，DelayedWorkQueue其实是ScheduledThreadPoolExecutor中的一个静态内部类，在添加的时候，会将任务加入到RunnableScheduledFuture数组中，同时线程池中的Woker线程会通过调用任务队列中的take()方法获取对应的ScheduledFutureTask线程任务，接着执行对应的任务线程
```java

static class DelayedWorkQueue extends AbstractQueue<Runnable>
        implements BlockingQueue<Runnable> {

    private static final int INITIAL_CAPACITY = 16;
    private RunnableScheduledFuture<?>[] queue =
        new RunnableScheduledFuture<?>[INITIAL_CAPACITY];
    private final ReentrantLock lock = new ReentrantLock();
    private int size = 0;   

    //....

    public boolean add(Runnable e) {
        return offer(e);
    }

    public boolean offer(Runnable x) {
        if (x == null)
            throw new NullPointerException();
        RunnableScheduledFuture<?> e = (RunnableScheduledFuture<?>)x;
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            int i = size;
            if (i >= queue.length)
                grow();
            size = i + 1;
            if (i == 0) {
                queue[0] = e;
                setIndex(e, 0);
            } else {
                siftUp(i, e);
            }
            if (queue[0] == e) {
                leader = null;
                available.signal();
            }
        } finally {
            lock.unlock();
        }
        return true;
    }

    public RunnableScheduledFuture<?> take() throws InterruptedException {
        final ReentrantLock lock = this.lock;
        lock.lockInterruptibly();
        try {
            for (;;) {
                RunnableScheduledFuture<?> first = queue[0];
                if (first == null)
                    available.await();
                else {
                    long delay = first.getDelay(NANOSECONDS);
                    if (delay <= 0)
                        return finishPoll(first);
                    first = null; // don't retain ref while waiting
                    if (leader != null)
                        available.await();
                    else {
                        Thread thisThread = Thread.currentThread();
                        leader = thisThread;
                        try {
                            available.awaitNanos(delay);
                        } finally {
                            if (leader == thisThread)
                                leader = null;
                        }
                    }
                }
            }
        } finally {
            if (leader == null && queue[0] != null)
                available.signal();
            lock.unlock();
        }
    }
}
```


回到我们最开始说到的ScheduledFutureTask任务线程类，最终执行任务的其实就是它
> ScheduledFutureTask任务线程，才是真正执行任务的线程类，只是绕了一圈，做了很多包装，run()方法就是真正执行定时任务的方法。
```java
private class ScheduledFutureTask<V>
extends FutureTask<V> implements RunnableScheduledFuture<V> {

    /** Sequence number to break ties FIFO */
    private final long sequenceNumber;

    /** The time the task is enabled to execute in nanoTime units */
    private long time;

    /**
     * Period in nanoseconds for repeating tasks.  A positive
     * value indicates fixed-rate execution.  A negative value
     * indicates fixed-delay execution.  A value of 0 indicates a
     * non-repeating task.
     */
    private final long period;

    /** The actual task to be re-enqueued by reExecutePeriodic */
    RunnableScheduledFuture<V> outerTask = this;

    /**
     * Overrides FutureTask version so as to reset/requeue if periodic.
     */
    public void run() {
        boolean periodic = isPeriodic();
        if (!canRunInCurrentRunState(periodic))
            cancel(false);
        else if (!periodic)
            ScheduledFutureTask.super.run();
        else if (ScheduledFutureTask.super.runAndReset()) {
            setNextRunTime();
            reExecutePeriodic(outerTask);
        }
    }

//...
}
```

## 3.3、小结
ScheduledExecutorService 相比 Timer 定时器，完美的解决上面说到的 Timer 存在的两个缺点！

在单体应用里面，使用 ScheduledExecutorService 可以解决大部分需要使用定时任务的业务需求！

但是这是否意味着它是最佳的解决方案呢？

我们发现线程池中 ScheduledExecutorService 的排序容器跟 Timer 一样，都是采用最小堆的存储结构，新任务加入排序效率是O(log(n))，执行取任务是O(1)。

这里的写入排序效率其实是有空间可提升的，有可能优化到O(1)的时间复杂度，也就是我们下面要介绍的时间轮实现！

## 四、时间轮实现
所谓时间轮（RingBuffer）实现，从数据结构上看，简单的说就是循环队列，从名称上看可能感觉很抽象。

它其实就是一个环形的数组，如图所示，假设我们创建了一个长度为 8 的时间轮。

![img_7.png](img_7.png)
插入、取值流程：

* 1.当我们需要新建一个 1s 延时任务的时候，则只需要将它放到下标为 1 的那个槽中，2、3、...、7也同样如此。
* 2.而如果是新建一个 10s 的延时任务，则需要将它放到下标为 2 的槽中，但同时需要记录它所对应的圈数，也就是 1 圈，不然就和 2 秒的延时消息重复了
* 3.当创建一个 21s 的延时任务时，它所在的位置就在下标为 5 的槽中，同样的需要为他加上圈数为 2，依次类推...
因此，总结起来有两个核心的变量：

* 数组下标：表示某个任务延迟时间，从数据操作上对执行时间点进行取余
* 圈数：表示需要循环圈数
通过这张图可以更直观的理解！

![img_8.png](img_8.png)
当我们需要取出延时任务时，只需要每秒往下移动这个指针，然后取出该位置的所有任务即可，取任务的时间消耗为O(1)。

当我们需要插入任务式，也只需要计算出对应的下表和圈数，即可将任务插入到对应的数组位置中，插入任务的时间消耗为O(1)。

如果时间轮的槽比较少，会导致某一个槽上的任务非常多，那么效率也比较低，这就和 HashMap 的 hash 冲突是一样的，因此在设计槽的时候不能太大也不能太小。

## 4.1、代码实现
首先创建一个RingBufferWheel时间轮定时任务管理器

```java

public class RingBufferWheel {

    private Logger logger = LoggerFactory.getLogger(RingBufferWheel.class);


    /**
     * default ring buffer size
     */
    private static final int STATIC_RING_SIZE = 64;

    private Object[] ringBuffer;

    private int bufferSize;

    /**
     * business thread pool
     */
    private ExecutorService executorService;

    private volatile int size = 0;

    /***
     * task stop sign
     */
    private volatile boolean stop = false;

    /**
     * task start sign
     */
    private volatile AtomicBoolean start = new AtomicBoolean(false);

    /**
     * total tick times
     */
    private AtomicInteger tick = new AtomicInteger();

    private Lock lock = new ReentrantLock();
    private Condition condition = lock.newCondition();

    private AtomicInteger taskId = new AtomicInteger();
    private Map<Integer, Task> taskMap = new ConcurrentHashMap<>(16);

    /**
     * Create a new delay task ring buffer by default size
     *
     * @param executorService the business thread pool
     */
    public RingBufferWheel(ExecutorService executorService) {
        this.executorService = executorService;
        this.bufferSize = STATIC_RING_SIZE;
        this.ringBuffer = new Object[bufferSize];
    }


    /**
     * Create a new delay task ring buffer by custom buffer size
     *
     * @param executorService the business thread pool
     * @param bufferSize      custom buffer size
     */
    public RingBufferWheel(ExecutorService executorService, int bufferSize) {
        this(executorService);

        if (!powerOf2(bufferSize)) {
            throw new RuntimeException("bufferSize=[" + bufferSize + "] must be a power of 2");
        }
        this.bufferSize = bufferSize;
        this.ringBuffer = new Object[bufferSize];
    }

    /**
     * Add a task into the ring buffer(thread safe)
     *
     * @param task business task extends {@link Task}
     */
    public int addTask(Task task) {
        int key = task.getKey();
        int id;

        try {
            lock.lock();
            int index = mod(key, bufferSize);
            task.setIndex(index);
            Set<Task> tasks = get(index);

            int cycleNum = cycleNum(key, bufferSize);
            if (tasks != null) {
                task.setCycleNum(cycleNum);
                tasks.add(task);
            } else {
                task.setIndex(index);
                task.setCycleNum(cycleNum);
                Set<Task> sets = new HashSet<>();
                sets.add(task);
                put(key, sets);
            }
            id = taskId.incrementAndGet();
            task.setTaskId(id);
            taskMap.put(id, task);
            size++;
        } finally {
            lock.unlock();
        }

        start();

        return id;
    }


    /**
     * Cancel task by taskId
     * @param id unique id through {@link #addTask(Task)}
     * @return
     */
    public boolean cancel(int id) {

        boolean flag = false;
        Set<Task> tempTask = new HashSet<>();

        try {
            lock.lock();
            Task task = taskMap.get(id);
            if (task == null) {
                return false;
            }

            Set<Task> tasks = get(task.getIndex());
            for (Task tk : tasks) {
                if (tk.getKey() == task.getKey() && tk.getCycleNum() == task.getCycleNum()) {
                    size--;
                    flag = true;
                    taskMap.remove(id);
                } else {
                    tempTask.add(tk);
                }

            }
            //update origin data
            ringBuffer[task.getIndex()] = tempTask;
        } finally {
            lock.unlock();
        }

        return flag;
    }

    /**
     * Thread safe
     *
     * @return the size of ring buffer
     */
    public int taskSize() {
        return size;
    }

    /**
     * Same with method {@link #taskSize}
     * @return
     */
    public int taskMapSize(){
        return taskMap.size();
    }

    /**
     * Start background thread to consumer wheel timer, it will always run until you call method {@link #stop}
     */
    public void start() {
        if (!start.get()) {

            if (start.compareAndSet(start.get(), true)) {
                logger.info("Delay task is starting");
                Thread job = new Thread(new TriggerJob());
                job.setName("consumer RingBuffer thread");
                job.start();
                start.set(true);
            }

        }
    }

    /**
     * Stop consumer ring buffer thread
     *
     * @param force True will force close consumer thread and discard all pending tasks
     *              otherwise the consumer thread waits for all tasks to completes before closing.
     */
    public void stop(boolean force) {
        if (force) {
            logger.info("Delay task is forced stop");
            stop = true;
            executorService.shutdownNow();
        } else {
            logger.info("Delay task is stopping");
            if (taskSize() > 0) {
                try {
                    lock.lock();
                    condition.await();
                    stop = true;
                } catch (InterruptedException e) {
                    logger.error("InterruptedException", e);
                } finally {
                    lock.unlock();
                }
            }
            executorService.shutdown();
        }


    }


    private Set<Task> get(int index) {
        return (Set<Task>) ringBuffer[index];
    }

    private void put(int key, Set<Task> tasks) {
        int index = mod(key, bufferSize);
        ringBuffer[index] = tasks;
    }

    /**
     * Remove and get task list.
     * @param key
     * @return task list
     */
    private Set<Task> remove(int key) {
        Set<Task> tempTask = new HashSet<>();
        Set<Task> result = new HashSet<>();

        Set<Task> tasks = (Set<Task>) ringBuffer[key];
        if (tasks == null) {
            return result;
        }

        for (Task task : tasks) {
            if (task.getCycleNum() == 0) {
                result.add(task);

                size2Notify();
            } else {
                // decrement 1 cycle number and update origin data
                task.setCycleNum(task.getCycleNum() - 1);
                tempTask.add(task);
            }
            // remove task, and free the memory.
            taskMap.remove(task.getTaskId());
        }

        //update origin data
        ringBuffer[key] = tempTask;

        return result;
    }

    private void size2Notify() {
        try {
            lock.lock();
            size--;
            if (size == 0) {
                condition.signal();
            }
        } finally {
            lock.unlock();
        }
    }

    private boolean powerOf2(int target) {
        if (target < 0) {
            return false;
        }
        int value = target & (target - 1);
        if (value != 0) {
            return false;
        }

        return true;
    }

    private int mod(int target, int mod) {
        // equals target % mod
        target = target + tick.get();
        return target & (mod - 1);
    }

    private int cycleNum(int target, int mod) {
        //equals target/mod
        return target >> Integer.bitCount(mod - 1);
    }

    /**
     * An abstract class used to implement business.
     */
    public abstract static class Task extends Thread {

        private int index;

        private int cycleNum;

        private int key;

        /**
         * The unique ID of the task
         */
        private int taskId ;

        @Override
        public void run() {
        }

        public int getKey() {
            return key;
        }

        /**
         *
         * @param key Delay time(seconds)
         */
        public void setKey(int key) {
            this.key = key;
        }

        public int getCycleNum() {
            return cycleNum;
        }

        private void setCycleNum(int cycleNum) {
            this.cycleNum = cycleNum;
        }

        public int getIndex() {
            return index;
        }

        private void setIndex(int index) {
            this.index = index;
        }

        public int getTaskId() {
            return taskId;
        }

        public void setTaskId(int taskId) {
            this.taskId = taskId;
        }
    }


    private class TriggerJob implements Runnable {

        @Override
        public void run() {
            int index = 0;
            while (!stop) {
                try {
                    Set<Task> tasks = remove(index);
                    for (Task task : tasks) {
                        executorService.submit(task);
                    }

                    if (++index > bufferSize - 1) {
                        index = 0;
                    }

                    //Total tick number of records
                    tick.incrementAndGet();
                    TimeUnit.SECONDS.sleep(1);

                } catch (Exception e) {
                    logger.error("Exception", e);
                }

            }

            logger.info("Delay task has stopped");
        }
    }
}
```

接着，编写一个客户端，测试客户端

```java
public static void main(String[] args) {
    RingBufferWheel ringBufferWheel = new RingBufferWheel( Executors.newFixedThreadPool(2));
    for (int i = 0; i < 3; i++) {
        RingBufferWheel.Task job = new Job();
        job.setKey(i);
        ringBufferWheel.addTask(job);
    }
}

public static class Job extends RingBufferWheel.Task{
    @Override
    public void run() {
        System.out.println("test5");
    }
}
```


运行结果：
```java
test5
test5
test5

```
如果要周期性执行任务，可以在任务执行完成之后，再重新加入到时间轮中。


## 4.2、应用
时间轮的应用还是非常广的，例如在 Disruptor 项目中就运用到了 RingBuffer，还有Netty中的HashedWheelTimer工具原理也差不多等等，有兴趣的同学，可以阅读一下官方对应的源码！