---
title: 装饰器模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：装饰器模式是一种结构性设计模式，它允许您在不影响同一类的其他对象的行为的情况下，静态或动态地向单个对象添加行为。 当您想要在运行时添加或删除对象的功能时，或者当您想要减少创建不同行为组合所需的子类数量时，此模式非常有用。在Java中，使用继承和组合的结合来实现装饰器模式。 具体来说，您需要创建一个基类或接口来定义对象的核心行为，然后创建一个或多个装饰器类来向对象添加附加行为。 每个装饰器类都具有对其装饰的对象的引用，并且它可以在委托给对象的原始行为之前或之后修改对象的行为。
`允许向一个现有的对象添加新的功能，同时又不改变其结构`。主要解决继承关系过于复杂的问题，`通过组合来替代继承，给原始类动态添加增强功能`。

**场景**：
* 在不想增加很多子类的情况下扩展类时可用。
* 想要动态的为类增加功能
* 在不修改现有代码的情况下，向现有类添加新的功能。
* 在运行时动态地向对象添加新的行为。
* 以不同的方式组合对象，以实现不同的行为。

`在Mybatis中Executor接口`，是一个承上启下的执行器，在执行的过程中就会有本地缓存的一个使用，所以Mybatis使用上缓存的情况下，要在原有执行的方法上做增强（缓存），就考虑到装饰器模式来做缓存。

**优点**：
* 1.饰类和被装饰类可以独立发展，而不会相互耦合。是继承的一个替代模式。
* 2.装饰模式`可以动态地扩展或撤销一个实现类的功能`

**不足**：会出现更多的代码，更多的类，增加程序复杂性

**注意**：
* 装饰器类需要实现与被装饰对象相同的接口，以便可以对被装饰对象进行包装。
* 装饰器类应该在调用被装饰对象的方法之前或之后添加新的行为。
* 不要创建过多的装饰器对象，否则会导致代码变得复杂难以维护。

## 具体示例

```java
// 定义一个接口，表示组件
interface Component {
    void operation();
}
 
// 实现组件的具体类
class ConcreteComponent implements Component {
    public void operation() {
        System.out.println("具体对象的操作");
    }
}
 
// 定义装饰者接口
interface Decorator extends Component {
    void setComponent(Component component);
}
 
// 实现装饰者的具体类
class ConcreteDecorator implements Decorator {
    private Component component;
 
    public void setComponent(Component component) {
        this.component = component;
    }
 
    public void operation() {
        if (component != null) {
            System.out.println("具体装饰者的操作前");
            // 委托给组件处理请求
            component.operation();
            System.out.println("具体装饰者的操作后");
        }
    }
}
 
// 使用示例
public class DecoratorPatternDemo {
    public static void main(String[] args) {
        // 创建一个具体的组件实例
        Component concreteComponent = new ConcreteComponent();
 
        // 创建一个装饰者实例
        Decorator decorator = new ConcreteDecorator();
 
        // 设置装饰者的组件
        decorator.setComponent(concreteComponent);
 
        // 通过装饰者调用操作
        decorator.operation();
    }
}
```
这段代码定义了一个Component接口和一个具体的实现类ConcreteComponent，还定义了一个Decorator接口和一个具体的实现类ConcreteDecorator。在main方法中，我们创建了一个ConcreteComponent实例和一个ConcreteDecorator实例，将ConcreteComponent实例设置到ConcreteDecorator实例中，并调用了operation方法，演示了装饰者模式的使用。
