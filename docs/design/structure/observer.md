---
title: 观察者模式
index: false
icon: laptop-code
category:
- 设计模式
---

## 概述

Java观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。该模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理等。

观察者模式适用于以下场景：

* 当一个对象的状态发生改变时，需要通知其他对象并更新它们的状态。
* 当一个对象需要将自己的状态变化通知给其他对象，但是又不希望与这些对象之间产生紧密的耦合关系。
* 当一个对象的改变需要同时改变其他对象的状态，而且不知道具体有多少对象需要改变。
* 当一个对象的改变需要其他对象的协助，但是不希望这些对象与自己产生紧密的耦合关系。
* 当一个对象的改变会引起一系列的连锁反应，而且这些连锁反应的具体实现不希望被该对象所知道。
* 当一个对象需要向其他对象提供一种数据更新的方式，而且这种更新方式需要在不同的时间点通知不同的对象。

总之，观察者模式适用于需要在对象间建立动态的、松散耦合的关系的场景，例如事件处理、GUI编程、消息队列等。

## Java自带观察者模式介绍

Java提供的一种内置的观察者模式实现。它使用了Java中的Observable类和Observer接口来实现观察者模式。

Observable类是一个抽象类，它表示一个可观察的对象，具有添加、删除和通知观察者的方法。当Observable对象的状态发生改变时，会调用它的notifyObservers()方法，通知所有的观察者对象，并更新它们的状态。Observable类还提供了setChanged()方法和clearChanged()方法，用于标记Observable对象的状态是否发生了改变。

Observer接口表示观察者对象，具有更新状态的方法update()。当Observable对象的状态发生改变时，会调用观察者对象的update()方法，传递更新的数据。

```java
import java.util.Observable;
import java.util.Observer;
 
// 具体主题类
class WeatherStation extends Observable {
    private float temperature;
    private float humidity;
    private float pressure;
 
    public void setMeasurements(float temperature, float humidity, float pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        setChanged();
        notifyObservers();
    }
 
    public float getTemperature() {
        return temperature;
    }
 
    public float getHumidity() {
        return humidity;
    }
 
    public float getPressure() {
        return pressure;
    }
}
 
// 具体观察者类
class Display implements Observer {
    private float temperature;
    private float humidity;
    private float pressure;
 
    public void update(Observable o, Object arg) {
        if (o instanceof WeatherStation) {
            WeatherStation weatherStation = (WeatherStation) o;
            this.temperature = weatherStation.getTemperature();
            this.humidity = weatherStation.getHumidity();
            this.pressure = weatherStation.getPressure();
            display();
        }
    }
 
    public void display() {
        System.out.println("Temperature: " + temperature);
        System.out.println("Humidity: " + humidity);
        System.out.println("Pressure: " + pressure);
    }
}
 
// 使用JDK自带观察者模式实现气象站
public class Main {
    public static void main(String[] args) {
        WeatherStation weatherStation = new WeatherStation();
        Display display1 = new Display();
        Display display2 = new Display();
        weatherStation.addObserver(display1);
        weatherStation.addObserver(display2);
        weatherStation.setMeasurements(25.0f, 60.0f, 1013.0f);
        weatherStation.deleteObserver(display2);
        weatherStation.setMeasurements(26.0f, 65.0f, 1012.0f);
    }
}

```



