---
title: 模版模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：Java模板模式是一种行为设计模式，它定义了一个操作中的程序骨架，将一些步骤延迟到子类中实现。这使得子类可以在不改变程序结构的情况下重新定义程序中的某些步骤。**定义一个操作中的算法的骨架，而将一些步骤延迟到子类中**。使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。一次性实现一个算法的不变的部分，并将可变的行为留给子类来实现。**主要是用来解决复用和扩展两个问题**

**场景**：
* **多个子类有共同的方法，且逻辑基本相同**
* 可以把核心的算法和重要的功能设计为模板方法，子类去实现相关细节功能
* 系统在进行重构或者是功能优化的时候可以将子类重复的代码抽离到父类中
* 当需要定义一组算法，并且这些算法的结构相似，但是实现细节不同时，可以使用模板模式。
* 当需要控制算法的流程，并且在算法的不同阶段需要不同的行为时，可以使用模板模式。
* 当需要在不影响算法整体结构的情况下，对算法的某些步骤进行定制化时，可以使用模板模式。
* 当需要在多个类中使用相同的算法时，可以使用模板模式，避免代码重复。

在Java Servlet、JUnit TestCase、Java InputStream、Java AbstractList中都涉及到模板模式的运用

**优点**：
* 1.通过把子类中不变的部分抽离到子类中，从而达到去除子类方法的重复代码便于维护
* 2.扩展可变部分，子类实现模板父类的某些细节，有助于模板父类的扩展
* 3.通过一个父类调用子类实现的操作，通过子类扩展增加新的行为**（行为由父类控制，子类实现 符合开闭原则）**

**不足**：
* 1.按照设计习惯，抽象类负责声明最抽象、最一般的事物属性和方法，实现类负责完成具体的事务属性和方法，但是模板方式正好相反，**子类执行的结果影响了父类的结果，会增加代码阅读的难度**
* 2.每个不同的实现都需要一个子类去实现，导致类的个数不断增加，使得系统更为庞大

在Java模板模式中，有两种类型的方法：抽象方法和具体方法。抽象方法由子类实现，而具体方法由父类实现。模板方法是由具体方法和抽象方法组成的，它定义了程序的骨架，而具体方法则实现了算法的部分步骤。

**具体示例**

```java
abstract class CoffeeTemplate {
    // 模板方法，定义了制作咖啡的基本步骤
    final void makeCoffee() {
        boilWater();
        brewCoffeeGrinds();
        pourInCup();
        addSugarAndMilk();
    }
 
    // 以下是模板方法中定义的具体方法，子类可以重写它们
    void boilWater() {
        System.out.println("Boiling water");
    }
 
    void brewCoffeeGrinds() {
        System.out.println("Brewing coffee grinds");
    }
 
    void pourInCup() {
        System.out.println("Pouring into cup");
    }
 
    // 子类可以添加额外的方法或重写这个方法
    abstract void addSugarAndMilk();
}
 
class AmericanCoffee extends CoffeeTemplate {
    @Override
    void addSugarAndMilk() {
        System.out.println("Adding sugar and milk");
    }
}
 
class FrenchCoffee extends CoffeeTemplate {
    @Override
    void addSugarAndMilk() {
        System.out.println("Adding sugar and cream");
    }
}
 
public class TemplatePatternExample {
    public static void main(String[] args) {
        CoffeeTemplate americanCoffee = new AmericanCoffee();
        americanCoffee.makeCoffee();
 
        CoffeeTemplate frenchCoffee = new FrenchCoffee();
        frenchCoffee.makeCoffee();
    }
}
```
在这个例子中，CoffeeTemplate 类定义了一个名为 makeCoffee 的模板方法，它是一个 final 方法，以确保子类不会更改其结构。CoffeeTemplate 同时定义了四个抽象方法，这些方法必须在子类中被实现。AmericanCoffee 和 FrenchCoffee 类分别实现了 addSugarAndMilk 方法，提供了不同的咖啡添加糖和奶油的方式。

在 main 方法中，我们创建了 AmericanCoffee 和 FrenchCoffee 的实例，并调用它们的 makeCoffee 方法，这将执行定义在 CoffeeTemplate 中的模板方法。每个子类都按照自己的方式实现了添加糖和奶油的方法，但是都遵循了统一的制作咖啡的流程。

总之，Java模板模式适用于那些需要在程序中定义骨架，并且在子类中实现具体步骤的情况。它可以提高代码的复用性和可维护性，同时也可以使代码更加灵活和可扩展。




