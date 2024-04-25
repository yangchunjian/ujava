---
title: 享元模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：享元模式（Flyweight Pattern）是一种结构型设计模式，它通过共享对象来减少内存使用和对象创建的开销。享元模式属于对象型模式，它通过创建一个享元工厂来管理共享对象，并在需要时返回已经存在的对象，从而减少对象的创建和销毁次数。又称轻量级模式，`是对象池的一种实现`。所谓“享元”，**顾名思义就是被共享的单元**。享元模式的意图是**复用对象，节省内存**，前提是享元对象是不可变对象。运用共享技术有效地支持大量细粒度的对象。

**场景**：
* 1.常常应用于系统底层的开发，以便解决系统的性能问题。
* 2.系统有大量相似的对象、需要缓存池的场景。

String类，Interger,Long等基本包装类中

**优点**：
* 1.减少对象的创建 ，降低内存中对象的数量 ，降低系统的内存 ，提高效率；
* 2.减少内存之外的其它资源占用。

**不足**：
* 1.关注内、外部状态、关注线程安全问题；
* 2.使系统、程序复杂化

## 具体示例

```java
// 享元接口
interface Flyweight {
    void operation(int extrinsicState);
}
 
// 具体的享元类
class ConcreteFlyweight implements Flyweight {
    private Character intrinsicState;
 
    public ConcreteFlyweight(Character intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
 
    @Override
    public void operation(int extrinsicState) {
        System.out.println("Intrinsic State: " + intrinsicState + " Extrinsic State: " + extrinsicState);
    }
}
 
// 享元工厂
class FlyweightFactory {
    private Map<Character, Flyweight> flyweights = new HashMap<>();
 
    public Flyweight getFlyweight(Character key) {
        Flyweight flyweight = flyweights.get(key);
        if (flyweight == null) {
            flyweight = new ConcreteFlyweight(key);
            flyweights.put(key, flyweight);
        }
        return flyweight;
    }
}
 
public class FlyweightPatternDemo {
    public static void main(String[] args) {
        FlyweightFactory flyweightFactory = new FlyweightFactory();
 
        Flyweight flyweightA = flyweightFactory.getFlyweight('a');
        flyweightA.operation(2);
 
        Flyweight flyweightB = flyweightFactory.getFlyweight('b');
        flyweightB.operation(1);
 
        Flyweight flyweightC = flyweightFactory.getFlyweight('a');
        flyweightC.operation(2);
 
        // 由于'a'已经被创建并存储在工厂中，所以这里返回的是同一个对象
        System.out.println(flyweightA == flyweightC); // 输出: true
    }
}
```

在这个例子中，FlyweightFactory类充当了享元工厂的角色，它维护了一个共享对象的Map。当请求一个共享对象时，如果对象已经存在于Map中，它将被重用，否则将创建一个新的对象并加入到Map中。通过这种方式，可以有效地复用和共享大量相似对象的数据。

