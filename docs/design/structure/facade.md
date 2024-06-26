---
title: 外观模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：外观模式（Facade Pattern）是一种结构型设计模式，它提供了一个简单的接口来访问复杂系统中的子系统，从而隐藏了子系统的复杂性。外观模式属于对象型模式，它通过创建一个外观类，将客户端与子系统解耦，使得客户端只需要与外观类交互即可完成操作。通过封装细粒度的接口，提供组合各个细粒度接口的高层次接口，来提高接口的易用性，`或者解决性能、分布式事务等问题`。当你需要构建一个层次结构的子系统时，使用facade模式定义子系统中每层的入口点。`如果子系统之间是相互依赖的，你可以让它们仅通过facade进行通讯，从而简化了它们之间的依赖关系`。

**场景**：1.子系统相对独立时可使用，`Tomcat源码`中有很多不同组件，每个组件要相互通信。`mybatis源码`

**优点**：
* 1.`松耦合`，用户与子系统解耦，屏蔽子系统；可以提高子系统的独立性；
* 2.`使用简单`，用户只与门面对接，有统一的入口；不需要知道所有子系统及内部构造；
* 3.`更好的划分访问层次`

**不足**：
* 1.`没有面向抽象编程`，而是通过增加中介层，转换服务提供方的服务接口；
* 2.`不符合开闭原则`，如果要改东西很麻烦，`继承重写都不合适`

## 具体示例

```java
// 子系统的类A
class SubSystemA {
    void operationA() {
        System.out.println("子系统A的操作");
    }
}
 
// 子系统的类B
class SubSystemB {
    void operationB() {
        System.out.println("子系统B的操作");
    }
}
 
// 子系统的类C
class SubSystemC {
    void operationC() {
        System.out.println("子系统C的操作");
    }
}
 
// 门面类
class Facade {
    private SubSystemA obj1 = new SubSystemA();
    private SubSystemB obj2 = new SubSystemB();
    private SubSystemC obj3 = new SubSystemC();
 
    void operation() {
        obj1.operationA();
        obj2.operationB();
        obj3.operationC();
    }
}
 
// 客户端代码
public class Main {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.operation();
    }
}
```

在这个例子中，Facade类封装了对子系统A、B、C的操作。客户端代码只需要与Facade类交互，无需了解子系统内部的复杂性。这就是门面模式的一个简单应用。

