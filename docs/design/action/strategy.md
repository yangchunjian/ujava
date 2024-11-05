---
title: 策略模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换

**介绍**：策略模式是一种行为型设计模式，它允许您定义一系列算法，将每个算法封装起来，并使它们可以互换使用。这种模式使得算法可以独立于使用它们的客户端而变化。在Java中，策略模式通常由一个接口和多个实现该接口的类组成。客户端将使用该接口来调用算法，而不是直接调用实现类。这样，客户端就可以在运行时选择不同的算法实现，而不需要修改代码。定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。简单理解，**应该是对于同一个业务功能，在不同的场景需求下提供不同的实现逻辑，来达到动态切换业务算法，满足不同场景的目的**。同时它也有另外的好处，即优化代码结构，使其脱离大量逻辑判断，对外只提供 Context上下文，让算法与实际业务代码解耦，对使用者屏蔽底层实现逻辑

**场景**：
* 1.业务代码需要根据场景不同，切换不同的实现逻辑
* 2.避免使用多重条件判断。

策略模式在 JDK 中，ThreadPoolExecutor 类。TreeMap中

**优点**：
* 1.**算法可以自由切换**。
* 2.扩展可变部分，子类实现模板父类的某些细节，有助于模板父类的扩展
* 3.扩展性良好


**不足**：
* 1.策略类会增多
* 2.**所有策略类都需要对外暴露**

策略模式把`对象本身`和`运算规则`区分开来。分为三个部分：

    抽象策略类(Strategy):策略的抽象
    具体策略类(ConcreteStrategy):具体的策略实现
    具体应用入口类：

## 实现

第一步： 定义抽象策略类

    public interface  TravelStrategy {
        void goHome();
    }

第二步： 实现具体策略类

    // 步行
    public class FirstTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是步行回家的...");
        }
    }
    
    // 火车
    public class TwoTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是火车回家的...");
        }
    }
    
    // 飞机
    public class ThreeTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是飞机回家的...");
        }
    }

第三步：具体应用

    public class GoHome {
        TravelStrategy travelStrategy;
        public void setTravelStrategy(TravelStrategy travelStrategy) {
            this.travelStrategy = travelStrategy;
        }
        public void goHome() {
            travelStrategy.goHome();
        }
        public static void main(String args) {
            GoHome goHome = new GoHome();
            // 步行
    //        goHome.setTravelStrategy(new FirstTravelStrategy());
            // 火车
    //        goHome.setTravelStrategy(new TwoTravelStrategy());
            // 飞机
            goHome.setTravelStrategy(new ThreeTravelStrategy());
    
            goHome.goHome();
        }
    }

Spring实现策略模式
除了以上三步，Spring可以添加一个工厂类，用工厂创建需要执行的策略类，应用Spring依赖注入，省去我们自己创建策略类的过程。

修改如下：

之前第二步加上注解：

    // 步行
    @Service("walk")
    public class FirstTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是步行回家的...");
        }
    }

其他俩个同上，加上注解并添加名称`@Service(“train”)`，`@Service(“plane”)`

添加工厂类：

    @Service
    public class TravelStrategyFactory {
    
    // spring容器启动会讲对应TravelStrategy下策略类都加载到此map中
        @Autowired
        Map<String, TravelStrategy> bases = new ConcurrentHashMap<>();
    
        public TravelStrategy getTravelStrategy(String type) {
            TravelStrategy travelStrategy = bases.get(type);
            return travelStrategy;
        }
    
    }

最终应用类：

    public class GoHome {
        @Autowired
        TravelStrategyFactory travelStrategyFactory;
    
        TravelStrategy travelStrategy;
        public void setTravelStrategy(String type) {
            this.travelStrategy = travelStrategyFactory.getTravelStrategy(type);
        }
        public void goHome() {
            travelStrategy.goHome();
        }
        public static void main(String args) {
            GoHome goHome = new GoHome();
            // 步行
            //goHome.setTravelStrategy("wale");
            // 火车
            //goHome.setTravelStrategy("train");
            // 飞机
            goHome.setTravelStrategy("plane");
    
            goHome.goHome();
        }
    }

## 具体示例

```java
// 策略接口
public interface Strategy {
    void execute();
}
 
// 策略实现
public class ConcreteStrategyA implements Strategy {
    @Override
    public void execute() {
        System.out.println("执行策略 A");
    }
}
 
public class ConcreteStrategyB implements Strategy {
    @Override
    public void execute() {
        System.out.println("执行策略 B");
    }
}
 
// 策略上下文
public class Context {
    private Strategy strategy;
 
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }
 
    public void execute() {
        strategy.execute();
    }
}
 
// 使用策略模式的示例
public class Main {
    public static void main(String[] args) {
        // 创建策略对象
        Strategy strategyA = new ConcreteStrategyA();
        Strategy strategyB = new ConcreteStrategyB();
 
        // 使用策略A
        Context contextA = new Context(strategyA);
        contextA.execute();
 
        // 使用策略B
        Context contextB = new Context(strategyB);
        contextB.execute();
    }
}
```
这个例子展示了如何在Java中实现策略模式。策略模式允许你在运行时更改对象的行为，将算法的定义抽象为类，从而可以使用继承来改变行为。在这个例子中，Context类依赖于Strategy接口，而具体的策略（如ConcreteStrategyA和ConcreteStrategyB）实现了这个接口。通过将具体策略的实例注入到上下文中，我们可以动态地改变上下文的行为。