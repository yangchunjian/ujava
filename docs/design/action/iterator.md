---
title: 迭代器模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java迭代器模式是一种行为设计模式，它提供了一种访问集合对象元素的方法，而不需要暴露该对象的内部表示。该模式适用于需要遍历集合对象的场景，例如数组、列表、树等。迭代器模式也叫游标模式，它用来**遍历集合对象**。这里说的“集合对象”，我们也可以叫“容器”“聚合对象”，实际上就是包含一组对象的对象，比如，数组、链表、树、图、跳表。迭代器模式主要作用是解耦容器代码和遍历代码。简单来说，不同种类的对象可能需要不同的遍历方式，我们对每一种类型的对象配一个迭代器，最后多个迭代器合成一个。

**场景**：
* 1.访问一个集合对象的内容而无需暴露它的内部表示
* 2. 为遍历不同的集合结构提供一个统一的访问接口

JAVA 中的 iterator。

**优点**：
* 1.它支持以不同的方式遍历一个聚合对象。
* 2.迭代器**简化了聚合类**
* 3.在同一个聚合上可以有多个遍历
* 4.在迭代器模式中，**增加新的聚合类和迭代器类都很方便，无须修改原有代码**

**不足**：由于迭代器模式将存储数据和遍历数据的职责分离，**增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性**

## 具体示例

```java
// 迭代器接口
interface Iterator {
    boolean hasNext();
    Object next();
}
 
// 容器接口
interface Container {
    Iterator getIterator();
}
 
// 具体容器类
class ConcreteContainer implements Container {
    private String[] items = {"item1", "item2", "item3"};
 
    @Override
    public Iterator getIterator() {
        return new ConcreteIterator(this);
    }
 
    public String[] getItems() {
        return items;
    }
}
 
// 具体迭代器类
class ConcreteIterator implements Iterator {
    private ConcreteContainer container;
    private int position = 0;
 
    public ConcreteIterator(ConcreteContainer container) {
        this.container = container;
    }
 
    @Override
    public boolean hasNext() {
        return position < container.getItems().length && container.getItems()[position] != null;
    }
 
    @Override
    public Object next() {
        if (this.hasNext()) {
            return container.getItems()[position++];
        }
        return null;
    }
}
 
// 使用示例
public class Main {
    public static void main(String[] args) {
        Container container = new ConcreteContainer();
        Iterator iterator = container.getIterator();
 
        while (iterator.hasNext()) {
            Object item = iterator.next();
            System.out.println(item);
        }
    }
}
```
这个代码示例展示了如何在Java中实现迭代器模式。Iterator接口定义了迭代器应有的方法，Container接口定义了容器应有的方法，而ConcreteContainer和ConcreteIterator分别是具体的容器和迭代器实现。在Main类的main方法中，我们创建了一个具体容器的实例，并获取了它的迭代器实例，然后通过迭代器遍历容器中的元素。


