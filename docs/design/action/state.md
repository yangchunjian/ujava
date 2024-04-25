---
title: 状态模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java状态模式是一种行为型设计模式，它允许对象在内部状态改变时改变它的行为。状态模式将状态封装成独立的类，并将请求委托给当前状态对象，从而实现状态的切换和状态行为的变化。
又称状态对象(Pattern of Objects for States)模式，是一种对象的行为模式。状态模式允许一个对象在其内部状态改变的时候改变其行为。这个对象看上去就像是改变了它的类一样。 **本质：根据状态来分离和选择行为**

**场景**：
* 一个由一个或多个动态变化的属性导致发生不同行为的对象，在与外部事件产生互动时，其内部状态就会改变，从而使得系统的行为也随之发生变化，那么这个对象，就是有状态的对象
* **代码中包含大量与对象状态有关的条件语句**，像是if else或switch case语句，**且这些条件执行与否依赖于该对象的状态**。
* 当一个对象的行为取决于它的状态，并且它必须在运行时根据状态改变它的行为时。
* 当一个对象需要根据状态改变它的数据和方法时。
* 当一个对象需要在多个状态之间切换，并且每个状态都有不同的行为时。

**优点**：
* 1.**简化应用逻辑控**, 把负责逻辑控制的代码分散到单独的状态类中，不用再关注代码执行状态的逻辑，只需要关注整个对象的状态就好，使得代码结构化和意图更清晰，从而简化应用的逻辑控制
* 2.**更好地分离状态和行为**，  状态模式通过设置所有状态类的公共接口，把状态和状态对应的行为分离开，把所有与一个特定的状态相关的行为都放入一个对象中，使得应用程序在控制的时候，只需要关心状态的切换，而不用关心这个状态对应的真正处理。
* 3.**更好的扩展性**， 引入了状态处理的公共接口后，使得扩展新的状态变得非常容易，只需要新增加一个实现状态处理的公共接口的实现类，然后在进行状态维护的地方，设置状态变化到这个新的状态即可
* 4.**显式化进行状态转换**，为不同的状态引入独立的对象，使得状态的转换变得更加明确。而且状态对象可以保证上下文不会发生内部状态不一致的情况，因为上下文中只有一个变量来记录状态对象，只要为这一个变量赋值就可以了

**不足**：
* 1.一个状态对应一个状态处理类，会使得程序引入太多的状态类，这样程序变得杂乱。
* 2.**没有遵守开闭原则**，引入新的新的状态会导致原有状态的修改
* 3.没有很好的处理耦合关系
 
**注意**：
* 状态模式可以增加类的数量，因此需要在设计时考虑类的数量和复杂性。
* 状态模式需要对状态进行封装，因此需要在设计时考虑状态的可扩展性和可维护性。

## 具体示例

```java
// 状态接口
interface State {
    void doAction(Context context);
}
 
// 具体状态A
class ConcreteStateA implements State {
    public void doAction(Context context) {
        System.out.println("当前状态是 A.");
        // 可以执行状态 A 下的一些操作
        context.setState(new ConcreteStateB()); // 可以设置新的状态
    }
}
 
// 具体状态B
class ConcreteStateB implements State {
    public void doAction(Context context) {
        System.out.println("当前状态是 B.");
        // 可以执行状态 B 下的一些操作
        context.setState(new ConcreteStateA()); // 可以设置新的状态
    }
}
 
// 环境类
class Context {
    private State state;
 
    public Context(State state) {
        this.state = state;
    }
 
    public void setState(State state) {
        this.state = state;
    }
 
    public void request() {
        state.doAction(this);
    }
}
 
// 客户端代码
public class StatePatternExample {
    public static void main(String[] args) {
        Context context = new Context(new ConcreteStateA());
        
        // 客户端操作会导致状态改变
        context.request();
        context.request();
        context.request();
        context.request();
    }
}
```
在这个例子中，Context类维护一个State对象的引用。request方法会委托给当前的状态对象去执行。根据不同的状态，可以执行不同的操作，并在必要时设置新的状态。这样，通过改变状态对象，Context可以改变它的行为。这就是状态模式的一个简单示例。

