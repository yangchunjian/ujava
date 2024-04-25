---
title: 原型模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：原型设计模式允许通过复制现有对象来创建新对象，而不是通过实例化类来创建新对象。用原型实例指定创建对象的种类，并且`通过拷贝这些原型创建新的对象`。原型模式有两种实现方法，`深拷贝和浅拷贝。原型模式的目的是 降低实例对象个数 , 减少构造函数的调用次数`。

**场景**：在需要创建大量相似对象时非常有用，它可以避免重复创建对象，从而提高性能，并且可以根据需要实现浅拷贝或深拷贝。在Java中，原型模式的实现通常涉及到实现Cloneable接口和重写clone()方法。如果对象的创建成本比较大，而同一个类的不同对象之间差别不大（大部分字段都相同），在这种情况下，我们可以利用对已有对象（原型）进行复制（或者叫拷贝）的方式，来创建新对象，以达到节省创建时间的目的。`Spring 中原型 bean 的创建`。

**优点**：
* 1.性能高 : 使用原型模式复用的方式创建实例对象 , 比使用构造函数重新创建对象性能要高 ; ( 针对类实例对象开销大的情况 )
* 2.流程简单 : 原型模式可以简化创建的过程 , 可以直接修改现有的对象实例的值 , 达到复用的目的 ; ( 针对构造函数繁琐的情况 )
**不足**：
* 1.覆盖 clone 方法 ( 必须 ) : 必须重写对象的 clone 方法 , Java 中提供了 cloneable 标识该对象可以被拷贝 , 但是必须覆盖 Object 的 clone 方法才能被拷贝 ; 
* 2.深拷贝 与 浅拷贝 风险 : 克隆对象时进行的一些修改 , 容易出错 ; 需要灵活运用深拷贝与浅拷贝操作 ;

## 具体示例

```java
public class PrototypeExample implements Cloneable {
    private int count;
 
    public PrototypeExample(int count) {
        this.count = count;
    }
 
    // 实现克隆方法
    @Override
    public Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(); // Can never happen
        }
    }
 
    public void printCount() {
        System.out.println("Count: " + count);
    }
 
    public static void main(String[] args) {
        PrototypeExample prototype = new PrototypeExample(10);
        prototype.printCount(); // 输出 Count: 10
 
        // 使用克隆方法复制对象
        PrototypeExample copy = (PrototypeExample) prototype.clone();
        copy.printCount(); // 输出 Count: 10
 
        // 修改复制对象的值，不会影响原对象
        copy.count = 20;
        copy.printCount(); // 输出 Count: 20
        prototype.printCount(); // 输出 Count: 10
    }
}
```
在这个例子中，PrototypeExample 类实现了 Cloneable 接口，并覆盖了 clone() 方法。在 main 方法中，我们创建了一个 PrototypeExample 对象，然后使用 clone() 方法复制了一个副本。这样我们就有了两个独立的对象，并且修改副本的值不会影响原对象。


