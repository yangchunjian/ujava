---
title: 业务委托模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

业务委托模式(business delegate)在表示层和业务层之间添加了一个抽象层。通过使用该模式，我们获得了层之间的松散耦合。业务委托封装了有关如何查找、连接到构成应用程序的业务对象并与之交互的知识。
业务委托使用的一些服务是直接实例化的，有些服务可以通过服务查找来检索。业务委托本身也可能包含业务逻辑，可能会将多个服务调用、异常处理、重试等捆绑在一起。
