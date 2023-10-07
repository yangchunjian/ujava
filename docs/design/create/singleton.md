---
title: 单例模式
index: false
icon: laptop-code
category:
- 设计模式
---

## 概述

单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一，有以下特点：

* 单例类只能有一个实例。
* 单例类必须自己创建自己的唯一实例。
* 单例类必须给所有其他对象提供这一实例。

## 1）饿汉式

这种方式比较常用，但容易产生垃圾对象
* 优点：没有加锁，执行效率会提高。
* 缺点：类加载时就初始化，浪费内存。
```java
public class Singleton {
    private static Singleton instance = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() {
        return instance;
    }
}

```


## 2）懒汉式，双检锁

在懒汉式基础上加入双重检验锁，保证线程安全和性能。

```java
public class Singleton {
    private volatile static Singleton instance = null;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

```

## 3）静态内部类

使用静态内部类来实现懒汉式单例模式，保证线程安全和性能。这种方式能达到双检锁方式一样的功效，但实现更简单。
```java
public class Singleton {
    private Singleton() {}
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}

```


## 4）枚举

使用枚举来实现单例模式，保证线程安全和防止反射攻击。

1）将已经有的class转换成枚举单例

`PersonEnum.INSTANCE.getInstance()`

```java
@Data
public class Person {
    private String name;
    private int age;
}

public enum PersonEnum {
    INSTANCE;

    private Person instance;
    private PersonEnum(){
        instance = new Person();
    }

    public Person getInstance() {
        return instance;
    }
}

```

2）直接新建枚举类

`PersonSingleton.INSTANCE`

```java
public enum PersonSingleton {
    INSTANCE;

    private String name;
    public String getName() {
        return name;
    }
}

```




