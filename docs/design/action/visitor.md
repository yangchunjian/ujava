---
title: 访问者模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java访问者模式是一种行为型设计模式，它允许你在不修改对象结构的前提下定义新的操作。访问者模式将对象结构和操作分离开来，使得操作可以独立地应用于对象结构中的元素。在访问者模式中，有两个主要角色：访问者和元素。访问者定义了对元素进行操作的方法，而元素则提供了接受访问者的方法。指**将作用域某种数据结构中的各元素的操作分离出来封装成独立的类**，使其在**不改变数据结构的前提下可以添加作用于这些元素的新的操作**。封装 作用于 某种 数据结构 的 各元素 操作 , 数据结构指的是 List , Set , Map 等 ;在 不改变 元素类 的前提下 , 定义 作用于 元素 的操作

**场景**：
* 一个对象结构包含多个类型的对象，**希望对这些对象实施一些依赖其具体类型的操作**
* 在访问者中针对每一种具体的类型都提供了一个访问操作，不同类型的对象可以有不同的访问操作
* 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作污染这些对象的类，也不希望在增加新操作时修改这些类
* 对象结构比较稳定，但经常需要在此对象结构上定义新的操作。
* 需要对一个对象结构中的对象进行很多不同的且不相关的操作，而不希望这些操作“污染”这些对象的类。
* 对象结构中对象的类很少改变，但经常需要在这些对象上定义新的操作。
* 需要在运行时根据对象的类型执行不同的操作。
* 需要对对象结构中的所有对象进行某种类型的处理，但是对象所采取的处理方式根据对象类型不同而异。
* 常见的使用访问者模式的场景包括：编译器的语法分析、XML文档解析、静态分析器、模型验证器、模型转换器等。

JDK源码中，Files 类提供了 walkFileTree() 方法。Spring源码中PropertySourcesPlaceholderConfigurer 允许我们用 Properties 文件中的属性来定义应用上下文

**优点**：
* 1.将元素对象的访问行为集中到一个访问者对象中，而不是分散在一个个的元素类中。类的职责更加清晰，有利于对象结构中元素对象的复用，相同的对象结构可以供多个不同的访问者访问
* 2.**增加新的访问操作就意味着增加一个新的具体访问者类**，方便扩展，无须修改源代码，符合开闭原则

**不足**：
* 1.**增加新的元素类很困难**。在访问者模式中，每增加一个新的元素类都意味着要在抽象访问者角色中增加一个新的抽象操作，并在每一个具体访问者类中增加相应的具体操作，这违背了开闭原则的要求。
* 2.**破坏封装**。访问者模式要求访问者对象访问并调用每一个元素对象的操作，这意味着元素对象有时候必须暴露一些自己的内部操作和内部状态，否则无法供访问者访问。

## 具体示例

```java
// Element接口
interface Element {
    void accept(Visitor visitor);
}
 
// 具体的ElementA类
class ConcreteElementA implements Element {
    public void accept(Visitor visitor) {
        visitor.visitConcreteElementA(this);
    }
 
    public void operationA() {
        // 具体操作
    }
}
 
// 具体的ElementB类
class ConcreteElementB implements Element {
    public void accept(Visitor visitor) {
        visitor.visitConcreteElementB(this);
    }
 
    public void operationB() {
        // 具体操作
    }
}
 
// Visitor接口
interface Visitor {
    void visitConcreteElementA(ConcreteElementA element);
    void visitConcreteElementB(ConcreteElementB element);
}
 
// 具体的Visitor类
class ConcreteVisitor implements Visitor {
    public void visitConcreteElementA(ConcreteElementA element) {
        // 对ConcreteElementA的具体操作
        element.operationA();
    }
 
    public void visitConcreteElementB(ConcreteElementB element) {
        // 对ConcreteElementB的具体操作
        element.operationB();
    }
}
 
// 使用访问者模式的示例
public class Main {
    public static void main(String[] args) {
        ConcreteElementA elementA = new ConcreteElementA();
        ConcreteElementB elementB = new ConcreteElementB();
        Visitor visitor = new ConcreteVisitor();
 
        elementA.accept(visitor);
        elementB.accept(visitor);
    }
}
```
在这个例子中，ConcreteElementA和ConcreteElementB类实现了Element接口，并且每个类都有一个accept方法，该方法接受一个Visitor对象作为参数。ConcreteVisitor类实现了Visitor接口，并且为每个Element子类提供了具体的访问操作。在main方法中，我们创建了一个ConcreteElementA和ConcreteElementB对象，以及一个ConcreteVisitor对象，然后通过调用accept方法，将元素对象传递给访问者对象，从而实现了不同的操作。



