---
title: 策略模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，**应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的**。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑

**场景**：
* 1.业务代码需要根据场景不同，切换不同的实现逻辑
* 2.避免使用多重条件判断。

策略模式在 JDK 中，ThreadPoolExecutor 类。TreeMap中

**优点**：
* 1.**算法可以自由切换**。
* 2.扩展可变部分，子类实现模板父类的某些细节，有助于模板父类的扩展
* 3.扩展性良好


**不足**：
* 1.策略类会增多
* 2.**所有策略类都需要对外暴露**

**具体示例**

```java
// 策略接口
public interface Strategy {
    void execute();
}
 
// 策略实现
public class ConcreteStrategyA implements Strategy {
    @Override
    public void execute() {
        System.out.println("执行策略 A");
    }
}
 
public class ConcreteStrategyB implements Strategy {
    @Override
    public void execute() {
        System.out.println("执行策略 B");
    }
}
 
// 策略上下文
public class Context {
    private Strategy strategy;
 
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }
 
    public void execute() {
        strategy.execute();
    }
}
 
// 使用策略模式的示例
public class Main {
    public static void main(String[] args) {
        // 创建策略对象
        Strategy strategyA = new ConcreteStrategyA();
        Strategy strategyB = new ConcreteStrategyB();
 
        // 使用策略A
        Context contextA = new Context(strategyA);
        contextA.execute();
 
        // 使用策略B
        Context contextB = new Context(strategyB);
        contextB.execute();
    }
}
```
这个例子展示了如何在Java中实现策略模式。策略模式允许你在运行时更改对象的行为，将算法的定义抽象为类，从而可以使用继承来改变行为。在这个例子中，Context类依赖于Strategy接口，而具体的策略（如ConcreteStrategyA和ConcreteStrategyB）实现了这个接口。通过将具体策略的实例注入到上下文中，我们可以动态地改变上下文的行为。