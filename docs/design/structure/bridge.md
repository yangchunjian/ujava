---
title: 桥接模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：桥接模式是一种将**抽象化和实现化解耦**的设计模式。它使用了封装、聚合以及继承等基本技术，将两个独立变化的维度通过抽象化的方式进行桥接，从而降低了它们之间的耦合度，使得系统更加灵活。将抽象部分与它的实现部分分离，使它们都可以独立地变化。`是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度`。

**场景**：
* 1.抽象和具体实现之间 , 需要增加更多灵活性的情况。
* 2.不希望使用继承 , 或 因多层继承导致系统类的个数增加。
* 3.一个类存在 2 个或更多的 独立变化维度 , 并且这些维度都需要独立扩展。`源码中JDBC 规范和不同数据库厂商驱动都用的桥接模式`

**优点**：
* 1.抽象与实现分离，扩展能力强
* 2.符合开闭原则
* 3.符合合成复用原则
* 4.实现细节透明化

**不足**：由于聚合关系建立在抽象层，要求开发者针对抽象化进行设计与编程，能正确地识别出系统中两个独立变化的维度，这`增加了系统的理解与设计难度`

**具体示例**

```java
// 抽象类部分
abstract class Abstraction {
    protected Implementor implementor;
 
    public Abstraction(Implementor implementor) {
        this.implementor = implementor;
    }
 
    public void operation() {
        implementor.operationImpl();
    }
}
 
// 修正抽象类
class RefinedAbstraction extends Abstraction {
    public RefinedAbstraction(Implementor implementor) {
        super(implementor);
    }
 
    public void operation() {
        // 可以在这里添加一些额外的操作
        super.operation();
    }
}
 
// 实现类接口
interface Implementor {
    void operationImpl();
}
 
// 具体实现类
class ConcreteImplementorA implements Implementor {
    public void operationImpl() {
        System.out.println("ConcreteImplementorA operation.");
    }
}
 
class ConcreteImplementorB implements Implementor {
    public void operationImpl() {
        System.out.println("ConcreteImplementorB operation.");
    }
}
 
// 客户端代码
public class BridgePatternExample {
    public static void main(String[] args) {
        // 使用具体实现类A
        Abstraction abstractionWithA = new RefinedAbstraction(new ConcreteImplementorA());
        abstractionWithA.operation();
 
        // 使用具体实现类B
        Abstraction abstractionWithB = new RefinedAbstraction(new ConcreteImplementorB());
        abstractionWithB.operation();
    }
}
```
在这个例子中，Abstraction类是一个抽象类，它通过组合方式引用了Implementor接口。RefinedAbstraction是一个修正抽象类，可以进一步扩展抽象类的行为。Implementor接口定义了实现类需要实现的操作。ConcreteImplementorA和ConcreteImplementorB是具体的实现类，实现了operationImpl方法。客户端代码中，我们创建了使用不同实现类的抽象类对象，并调用了操作方法。


