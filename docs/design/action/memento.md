---
title: 备忘录模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java备忘录模式是一种行为设计模式，它允许在不破坏封装性的情况下捕获和恢复对象的内部状态。备忘录模式通常用于需要撤销操作或恢复先前状态的情况下。该模式包括三个主要组件：原始对象、备忘录对象和负责管理备忘录对象的对象。在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存着这个状态。这样以后就**可将该对象恢复到原先保存的状态.备忘录模式又可以分为“白箱”备忘录模式和“黑箱”备忘录模式。**

**场景**：
* 1.提供一个**可回滚**的操作
* 2.保存一个对象在某一个时刻的状态或部分状态，这样以后需要时它能够恢复到先前的状态。
* 3.如果用一个接口来让其他对象得到这些状态，将会暴露对象的实现细节并破坏对象的封装性，一个对象不希望外界直接访问其内部状态，通过负责人可以间接访问其内部状态

Spring源码，类StateManageableMessageContext中

**优点**：
* 1.如果某个操作错误地破坏了数据的完整性，此时可以**使用备忘录模式将数据恢复成原来正确的数据**。
* 2.备份的状态数据保存在发起人角色之外，这样发起人就不需要对各个备份的状态进行管理。而是由备忘录角色进行管理，而备忘录角色又是由管理者角色管理，**符合单一职责原则**。
* 3.提供了一种状态恢复的实现机制，使得用户可以方便地回到一个特定的历史步骤，当新的状态无效或者存在问题时，可以使用先前存储起来的备忘录将状态复原。
* 4.**实现了信息的封装**，一个备忘录对象是一种原发器对象的表示，不会被其他代码改动，这种模式简化了原发器对象，备忘录只保存原发器的状态，采用堆栈来存储备忘录对象可以实现多次撤销操作，可以通过在负责人中定义集合对象来存储多个备忘录。

**不足**：
* 1.**消耗资源**。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。
* 2.在实际的系统中，可能需要维护多个备份，需要额外的资源，这样对资源的消耗比较严重。资源消耗过大，如果类的成员变量太多，就不可避免占用大量的内存，而且每保存一次对象的状态都需要消耗内存资源，如果知道这一点大家就容易理解为什么一些提供了撤销功能的软件在运行时所需的内存和硬盘空间比较大了

## 具体示例


```java
// 备忘录模式：备份和恢复对象状态
 
// Originator 类，负责创建一个备忘录来保存其状态
class Originator {
    private String state;
 
    public Originator(String state) {
        this.state = state;
    }
 
    public String getState() {
        return state;
    }
 
    public void setState(String state) {
        this.state = state;
    }
 
    // 创建备忘录对象
    public Memento createMemento() {
        return new Memento(state);
    }
 
    // 恢复备忘录对象的状态
    public void restoreMemento(Memento memento) {
        this.state = memento.getState();
    }
}
 
// Memento 类，负责保存 Originator 对象的状态
class Memento {
    private String state;
 
    public Memento(String state) {
        this.state = state;
    }
 
    public String getState() {
        return state;
    }
 
    public void setState(String state) {
        this.state = state;
    }
}
 
// Caretaker 类，负责保存好备忘录对象，不应该对它的内容进行操作或检查
class Caretaker {
    private Memento memento;
 
    public Memento retrieveMemento() {
        return memento;
    }
 
    public void saveMemento(Memento memento) {
        this.memento = memento;
    }
}
 
// 使用示例
public class MementoPatternExample {
    public static void main(String[] args) {
        Originator originator = new Originator("State #1");
        System.out.println("Originator initial state: " + originator.getState());
 
        // 保存状态
        Caretaker caretaker = new Caretaker();
        caretaker.saveMemento(originator.createMemento());
 
        // 改变原始对象的状态
        originator.setState("State #2");
        System.out.println("Originator new state: " + originator.getState());
 
        // 恢复状态
        originator.restoreMemento(caretaker.retrieveMemento());
        System.out.println("Originator restored state: " + originator.getState());
    }
}
```

这段代码展示了如何在Java中实现备忘录模式。Originator类负责保存其状态，Memento类负责保存Originator的状态，而Caretaker类负责保存好Memento对象，不应该对其进行操作或检查。使用示例中，我们创建了一个Originator对象，并改变了它的状态。然后我们保存了这个状态，并再次更改了Originator的状态。最后，我们从Caretaker恢复了原始状态。

