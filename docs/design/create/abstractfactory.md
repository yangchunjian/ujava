---
title: 抽象工厂模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：

通过定义一个创建对象的接口来创建对象，但将具体实现的决定留给子类来决定。在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。**提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类**。

**场景**：

* 1.客户端（应用层）不依赖与产品类示例如何被创建、实现等细节
* 2.强调一系列相关的产品对象（数据同一产品族）一起使用创建对象需要大量的重复代码
* 3.提供一个产品类的库，所有的产品以同样的接口出现，使得客户端不依赖于具体实现

Spring 中，BeanFactory 是用于管理 Bean 的一个工厂，所有工厂都是 BeanFactory 的子类

**优点**：

* 1.**具体产品在应用层的代码隔离，无需关系创建的细节**
* 2.将一个系列的产品统一到一起创建

**不足**：

* 1.规定了所有可能被创建的产品集合，**产品族中扩展新的产品困难**
* 2.增加了系统的抽象性和理解难度

## 具体示例

```java
// 车辆接口
interface Vehicle {
    void start();
}
 
// 汽车类实现
class Car implements Vehicle {
    public void start() {
        System.out.println("汽车启动。");
    }
}
 
// 自行车类实现
class Bicycle implements Vehicle {
    public void start() {
        System.out.println("自行车启动。");
    }
}
 
// 抽象工厂接口
interface VehicleFactory {
    Vehicle createVehicle();
}
 
// 汽车工厂实现
class CarFactory implements VehicleFactory {
    public Vehicle createVehicle() {
        return new Car();
    }
}
 
// 自行车工厂实现
class BicycleFactory implements VehicleFactory {
    public Vehicle createVehicle() {
        return new Bicycle();
    }
}
 
// 客户端代码
public class AbstractFactoryPattern {
    public static void main(String[] args) {
        // 创建汽车工厂
        VehicleFactory carFactory = new CarFactory();
        // 使用汽车工厂创建汽车
        Vehicle car = carFactory.createVehicle();
        car.start();
 
        // 创建自行车工厂
        VehicleFactory bicycleFactory = new BicycleFactory();
        // 使用自行车工厂创建自行车
        Vehicle bicycle = bicycleFactory.createVehicle();
        bicycle.start();
    }
}
```

这个例子中，我们定义了一个Vehicle接口和两个实现类Car和Bicycle，它们都实现了start方法。然后我们定义了一个VehicleFactory接口和两个实现工厂类CarFactory和BicycleFactory，它们负责创建相应的车辆对象。在客户端代码中，我们创建了汽车工厂和自行车工厂，并用它们分别创建汽车和自行车，然后启动它们。这就是抽象工厂模式的一个简单应用。


