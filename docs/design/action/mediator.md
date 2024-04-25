---
title: 中介者模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java中介者模式是一种行为设计模式，它允许对象之间通过中介者对象进行通信，从而避免对象之间的直接耦合。中介者模式将对象之间的复杂关系转化为中介者和对象之间的简单关系，从而提高了系统的灵活性和可维护性。在Java中介者模式中，中介者对象负责协调对象之间的通信，它通常包含一些公共方法，用于处理对象之间的交互。对象之间的通信通过中介者对象进行，从而避免了对象之间的直接耦合。
又叫做调停模式，**定义一个封装一组对象如何交互的对象** ，通过使对象明确地相互引用 , 促进松散耦合 , 允许独立改变它们之间的 交互 ;比如**我们各种设备之间的通信，就是通过服务器作为中介对象来进行交互**

**场景**：
* 1.系统中对象之间存在复杂的引用关系，系统结构混乱且难以理解
* 2. 一个对象由于引用了其他很多对象并且直接和这些对象通信，导致难以复用该对象
* 3.需要通过一个中间类来封装多个类中的行为，但又不想生成太多的子类

**在MVC框架中，控制器（Controller）就是模型（Model）和视图（View）之间的中介者**

**优点**：
* 1.**遵守单一职责原则**，各个组件的职责都可以保持克制和单一
* 2.**遵守开闭原则**，各个组件的代码不需要修改，但是他们的行为的可以通过实现中介类来做扩展
* 3.**遵守迪米特法则**，各个组件之间无需知晓对方的知识，只需要关注和中介的基础交互即可

**不足**：组件的可扩展、可维护，是将复杂度转移到中介对象上为代价，因此如果不加控制和设计，**中介对象很容已成为一个“上帝对象”，啥都要管，谁都不敢改动**

**具体示例**

```java
// 抽象同事类
abstract class Colleague {
    protected Mediator mediator;
    
    public Colleague(Mediator mediator) {
        this.mediator = mediator;
    }
}
 
// 具体同事类，实现具体操作
class ConcreteColleague extends Colleague {
    public ConcreteColleague(Mediator mediator) {
        super(mediator);
    }
    
    public void operation() {
        // 执行操作
        // ...
        // 通知中介者
        mediator.operation(this);
    }
}
 
// 抽象中介者，定义同事对象之间交互的接口
abstract class Mediator {
    public abstract void operation(Colleague colleague);
}
 
// 具体中介者，实现协调同事对象之间的交互
class ConcreteMediator extends Mediator {
    private ConcreteColleague1 c1;
    private ConcreteColleague2 c2;
    
    public ConcreteMediator() {
        c1 = new ConcreteColleague1(this);
        c2 = new ConcreteColleague2(this);
    }
    
    @Override
    public void operation(Colleague colleague) {
        // 实现协调操作
        // ...
    }
}
 
// 客户端代码
public class Client {
    public static void main(String[] args) {
        Mediator mediator = new ConcreteMediator();
        // 客户端不需要直接与具体同事类交互，中介者模式解耦了同事类之间的直接交互
    }
}
```
这个代码示例展示了如何在Java中实现中介者模式。同事类ConcreteColleague实现了具体的操作，而中介者ConcreteMediator协调两个同事类之间的交互。客户端代码中，我们创建了中介者对象，同事类之间的交互被中介者所解耦，客户端不需要直接与具体的同事类进行交互。



