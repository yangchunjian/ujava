---
title: 设计模式
index: false
icon: laptop-code
category:
  - 设计模式
---

## 简介

设计模式的起源可以追溯到20世纪80年代，当时面向对象编程开始流行。在这个时期，一些软件开发者开始注意到他们在不同的项目中遇到了相同的问题，并且他们开始寻找可重用的解决方案。这些解决方案被称为设计模式。最早提出设计模式的人是Erich
Gamma、Richard Helm、Ralph Johnson和John
Vlissides，他们在1994年出版了一本名为《设计模式：可复用面向对象软件的基础》的书，这本书成为了设计模式领域的经典著作。自那时以来，设计模式已经成为软件开发中非常重要的概念，并且在不同的编程语言和开发框架中都得到了广泛的应用。

四位作者合称 GOF（四人帮，全拼 Gang of Four）。他们所提出的设计模式主要是基于以下的面向对象设计原则。

* 对接口编程而不是对实现编程。
* 优先使用对象组合而不是继承。

设计模式是常见的软件设计问题的可重用解决方案。它们提供了一种解决开发人员在设计软件应用程序时经常遇到的问题的方法。设计模式有几种类型，包括创建型、结构型和行为型模式。

* 创建型模式用于以灵活和高效的方式创建对象。包括Singleton模式、工厂模式和抽象工厂模式等。
* 结构型模式用于组合类和对象以形成更大的结构。包括适配器模式、桥接模式和装饰器模式等。
* 行为型模式用于处理类或对象之间的通信和控制流。包括观察者模式、策略模式和模板方法模式。
* 设计模式是软件开发中非常有用的工具，可以提高代码的可重用性和可维护性，同时也可以提高开发人员的工作效率。

## 设计模式的六大原则

* 单一职责原则（SRP）：一个类只应该有一个引起它变化的原因。
* 开放封闭原则（OCP）：软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。
* 里氏替换原则（LSP）：子类型必须能够替换掉它们的父类型。
* 依赖倒置原则（DIP）：高层模块不应该依赖于低层模块，两者都应该依赖于抽象接口；抽象接口不应该依赖于具体实现，具体实现应该依赖于抽象接口。
* 接口隔离原则（ISP）：不应该强迫一个类实现它不需要的接口，应该将接口拆分成更小和更具体的部分，以便客户端只需要知道它们感兴趣的部分。
* 迪米特法则（LOD）：一个对象应该对其他对象有尽可能少的了解，通常称为“最少知识原则”。

### 一、创建型模式

* 1、单例模式（Singleton Pattern）
    * 1）饿汉式
    * 2）懒汉式，双检锁
    * 3）静态内部类
    * 4）枚举
* 2、原型模式（Prototype Pattern）
* 3、工厂模式（Factory Pattern）
* 4、抽象工厂模式（Abstract Factory Pattern）
* 5、建造者模式（Builder Pattern）

### 二、结构型模式

* 1、适配器模式（Adapter Pattern）
* 2、组合模式（Composite Pattern）
* 3、装饰器模式（Decorator Pattern）
* 4、外观模式（Facade Pattern）
* 5、享元模式（Flyweight Pattern）
* 6、代理模式（Proxy Pattern）
    * 1）静态代理
    * 2）jdk动态代理
    * 3）cglib动态代理
* 7、桥接模式（Bridge Pattern）

### 三、行为型模式

* 1、责任链模式（Chain of Responsibility Pattern）
* 2、命令模式（Command Pattern）
* 3、解释器模式（Interpreter Pattern）
* 4、迭代器模式（Iterator Pattern）
* 5、观察者模式（Observer Pattern）
* 6、状态模式（State Pattern）
* 7、模板模式（Template Pattern）
* 8、中介者模式（Mediator Pattern）
* 9、备忘录模式（Memento Pattern）
* 10、访问者模式（Visitor Pattern）
* 11、策略模式（Strategy Pattern）

## 其他

* 1、过滤器模式（Filter Pattern）
* 2、空对象模式（Null Object Pattern）