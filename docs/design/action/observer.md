---
title: 观察者模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。该模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理等。定义对象间的一种一对多的依赖关系,**当一个对象的状态发生改变时, 所有依赖于它的对象都得到通知并被自动更新**。观察者 有多个 , 被观察的 主题对象 只有一个。

**场景**：
* 一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。
* 需要在系统中创建一个**触发链，使得事件拥有跨域通知**（跨越两种观察者的类型）
* 当一个对象的状态发生改变时，需要通知其他对象并更新它们的状态。
* 当一个对象需要将自己的状态变化通知给其他对象，但是又不希望与这些对象之间产生紧密的耦合关系。
* 当一个对象的改变需要同时改变其他对象的状态，而且不知道具体有多少对象需要改变。
* 当一个对象的改变需要其他对象的协助，但是不希望这些对象与自己产生紧密的耦合关系。
* 当一个对象的改变会引起一系列的连锁反应，而且这些连锁反应的具体实现不希望被该对象所知道。
* 当一个对象需要向其他对象提供一种数据更新的方式，而且这种更新方式需要在不同的时间点通知不同的对象。

JDK的util包中。MVC(Modew-View-Controller)架构中也应用了观察者模式，其中模型（Model）可以对应观察者模式中的观察目标，而视图（View）对应于观察者，控制器（Controller）就是中介者模式的应用

**优点**：
* 1.**抽象耦合** : 在 观察者 和 被观察者 之间 , 建立了一个 抽象的 耦合 ; 由于 耦合 是抽象的 , 可以很容易 扩展 观察者 和 被观察者 ;
* 2.**广播通信** : 观察者模式 支持 广播通信 , 类似于消息广播 , 如果需要接收消息 , 只需要注册一下即可


**不足**：
* 1.**依赖过多** : 观察者 之间 细节依赖 过多 , 会增加 时间消耗 和 程序的复杂程度 ;
* 2.**循环调用** : 避免 循环调用 , 观察者 与 被观察者 之间 绝对不允许循环依赖 , 否则会触发 二者 之间的循环调用 , 导致系统崩溃 ;

总之，观察者模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理、GUI编程、消息队列等。

## Java自带观察者模式介绍

Java提供的一种内置的观察者模式实现。它使用了Java中的Observable类和Observer接口来实现观察者模式。

Observable类是一个抽象类，它表示一个可观察的对象，具有添加、删除和通知观察者的方法。当Observable对象的状态发生改变时，会调用它的notifyObservers()方法，通知所有的观察者对象，并更新它们的状态。Observable类还提供了setChanged()方法和clearChanged()方法，用于标记Observable对象的状态是否发生了改变。

Observer接口表示观察者对象，具有更新状态的方法update()。当Observable对象的状态发生改变时，会调用观察者对象的update()方法，传递更新的数据。

## 具体示例

```java
import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(float temp, float humidity, float pressure);
}

interface Subject {
    void registerObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}

class WeatherData implements Subject {
    private List<Observer> observers;
    private float temperature;
    private float humidity;
    private float pressure;

    public WeatherData() {
        observers = new ArrayList<>();
    }

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        int i = observers.indexOf(o);
        if (i >= 0) {
            observers.remove(i);
        }
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(temperature, humidity, pressure);
        }
    }

    public void measurementsChanged() {
        notifyObservers();
    }

    public void setMeasurements(float temperature, float humidity, float pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        measurementsChanged();
    }
}

class CurrentConditionsDisplay implements Observer {
    private float temperature;
    private float humidity;

    public void update(float temp, float humidity, float pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        display();
    }

    public void display() {
        System.out.println("Current conditions: " + temperature + "F degrees and " + humidity + "% humidity");
    }
}

public class WeatherStation {
    public static void main(String[] args) {
        WeatherData weatherData = new WeatherData();

        Observer currentDisplay = new CurrentConditionsDisplay();
        weatherData.registerObserver(currentDisplay);

        // 模拟气象数据变化
        weatherData.setMeasurements(30, 65, 30.4f);
    }
}
```

在这个例子中，WeatherData类实现了Subject接口，维护了观察者列表。当气象数据改变时，它会通知所有观察者。CurrentConditionsDisplay类实现了Observer接口，并更新了气象数据。当WeatherData的气象数据改变时，观察者会收到更新并打印出当前的气象状况。



