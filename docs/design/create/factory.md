---
title: 工厂模式
index: false
icon: laptop-code
category:
- 设计模式
---

## 概述

**介绍**： 通过一个工厂类来实现对象的创建，而无需直接暴露对象的创建逻辑给客户端。 工厂模式包括简单工厂、工厂方法、抽象工厂这3种细分模式。`用来创建不同但是相关类型的对象`（继承同一父类或者接口的一组子类），由给定的参数来决定创建哪种类型的对象。简单工厂模式的优点在于客户端无需了解具体产品类的创建细节，只需通过工厂类来创建对象，并且工厂类可以根据客户端的需求来动态创建不同类型的对象。但是缺点也比较明显，如果需要创建的产品类数量较多，则工厂类的代码会变得很臃肿，不便于维护。

**场景**：当对象创建逻辑比较复杂，是一个“大工程”的时候，就考虑使用工厂模式，`封装对象的创建过程，将对象的创建和使用相分离`。Spring IOC、Google Guice就是使用的工厂模式。

**优点**：
* 1.`封装变化`：创建逻辑有可能变化，封装成工厂类之后，创建逻辑的变更对调用者透明
* 2.`代码复用`：创建代码抽离到独立的工厂类之后可以复用
* 3.`隔离复杂性`：封装复杂的创建逻辑，调用者无需了解如何创建对象
* 4.`控制复杂度`：将创建代码抽离出来，让原本的函数或类职责更单一，代码更简洁

**不足**：
* 1.简单工厂，耦合度高，如果有变动就需要修改唯一的工厂
* 2.工厂方法，优点符合开闭（具体的业务类有具体工厂），缺点是每增加一个产品，相应的也要增加一个子工厂，加大了额外的开发量




