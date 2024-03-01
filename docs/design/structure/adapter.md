---
title: 适配器模式

icon: laptop-code
category:
- 设计模式
---

## 概述

**介绍**：适配器模式是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一个接口。适配器模式的主要目的是解决两个不兼容接口之间的接口转换问题，使得原本由于接口不匹配而无法工作的类可以协同工作。
适配器模式是用来做适配的，它将不兼容的接口转换为可兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式有两种实现方式：类适配器和对象适配器。其中，类适配器使用继承关系来实现，对象适配器使用组合关系来实现。
适配器模式的核心思想是创建一个适配器类，该适配器类实现了客户端期望的目标接口，并持有一个对被适配者对象的引用。适配器类通过调用被适配者对象的方法来实现目标接口的方法，从而完成接口的适配。它允许不兼容的接口之间进行通信。适配器模式通过将一个类的接口转换为客户端所期望的另一个接口来实现这一点。这种模式可以在不修改现有代码的情况下重用现有类。
适配器模式可以帮助我们在不修改现有代码的情况下重用现有类，并且可以使不兼容的接口之间进行通信。



**场景**：
适配器模式将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。
* 1.封装有缺陷的接口设计
* 2.统一多个类的接口设计
* 3.替换依赖的外部系统
* 4.兼容老版本接口
* 5.适配不同格式的数据

在Spring 的 AOP 面向切面编程 中

**优点**：
* 1.更好的复用性，系统需要使用现有的类，而此类的接口不符合系统的需要,那么通过适配器模式就可以让这些功能得到更好的复用。
* 2.透明、简单，客户端可以调用同一接口，因而对客户端来说是透明的
* 3.更好的扩展性，在实现适配器功能的时候，可以调用自己开发的功能，从而自然地扩展系统的功能
* 4.解耦性，目标类和适配者类解耦，通过引入一个适配器类重用现有的适配者类，而无需修改原有代码

**不足**：过多的使用适配器，会让系统非常零乱，不易整体进行把握



