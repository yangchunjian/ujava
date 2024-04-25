---
title: 建造者模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：建造者模式是一种创建型设计模式，它允许您通过一步一步地构建复杂对象来创建不同类型的对象。它使用一个建造者类来封装对象的创建过程并将其分解为多个简单的步骤。这使得您可以通过更改这些步骤来创建不同类型的对象。 `用来创建复杂对象`，可以通过设置不同的可选参数，“定制化”地创建不同的对象。与工厂模式不同的是，建造者的目的在于把复杂构造过程从不同对象展现中抽离出来，使得同样的构造工序可以展现出不同的产品对象。`建造者模式注重零部件的组装过程，而工厂方法模式更注重零部件的创建过程`，但两者可以结合使用

**场景**：创建组装复杂对象。StringBuilder 类中提供了 append() 方法，这就是一种链式创建对象的方法，开放构造步骤，最后调用 toString() 方法就可以获得一个完整的对象。MyBatis 中 SqlSessionFactoryBuiler 类用到了建造者模式

**优点**：
* 1.各个具体的`建造者相互独立，有利于系统的扩展`
* 2.客户端不必知道产品内部组成的细节，便于`控制细节风险`

**不足**：
* 1.产品的组成部分必须相同，这限制了其使用范围
* 2.如果产品的内部变化复杂，该模式会增加很多的建造者类

## 具体示例

```java
// 建造者模式示例：建造一辆汽车
 
// 车辆类
class Car {
    private String engine;
    private String wheel;
    private String body;
 
    public void setEngine(String engine) {
        this.engine = engine;
    }
 
    public void setWheel(String wheel) {
        this.wheel = wheel;
    }
 
    public void setBody(String body) {
        this.body = body;
    }
 
    @Override
    public String toString() {
        return "车辆{" +
                "引擎='" + engine + '\'' +
                ", 轮子='" + wheel + '\'' +
                ", 车身='" + body + '\'' +
                '}';
    }
}
 
// 建造者接口
interface CarBuilder {
    void buildEngine();
    void buildWheel();
    void buildBody();
    Car getCar();
}
 
// 具体的建造者实现
class ConcreteCarBuilder implements CarBuilder {
    private Car car = new Car();
 
    @Override
    public void buildEngine() {
        car.setEngine("V8引擎");
    }
 
    @Override
    public void buildWheel() {
        car.setWheel("大轮子");
    }
 
    @Override
    public void buildBody() {
        car.setBody("豪华车身");
    }
 
    @Override
    public Car getCar() {
        return car;
    }
}
 
// 指挥者类
class Director {
    public void construct(CarBuilder builder) {
        builder.buildEngine();
        builder.buildWheel();
        builder.buildBody();
    }
}
 
// 使用示例
public class BuilderPatternExample {
    public static void main(String[] args) {
        Director director = new Director();
        CarBuilder builder = new ConcreteCarBuilder();
        director.construct(builder);
        Car car = builder.getCar();
        System.out.println(car);
    }
}
```

这段代码首先定义了一个Car类，它代表了要构建的汽车实体。然后定义了一个CarBuilder接口，该接口规定了构建汽车的不同部分的方法。ConcreteCarBuilder是CarBuilder的具体实现，负责实际构建汽车的各个部分。Director类负责安排如何构建汽车，它接受一个CarBuilder实例作为参数，并调用其方法来构建汽车。最后，在BuilderPatternExample类的main方法中，我们创建了Director、ConcreteCarBuilder，并通过Director来构建一辆汽车，然后打印出汽车的信息。

