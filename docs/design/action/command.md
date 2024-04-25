---
title: 命令模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：命令模式是一种行为设计模式，它允许将请求封装为一个对象，从而使不同的请求可以使用不同的参数进行参数化，队列或日志请求，以及支持可撤销的操作。在Java中，命令模式的实现通常涉及一个命令接口和一个或多个具体命令类，这些类实现了命令接口，并在其execute()方法中定义了实际的命令逻辑。此外，命令模式还可能涉及一个调用者类，该类将一个或多个命令对象与接收者对象关联起来，并在需要时调用它们的execute()方法。 命令模式是一种非常灵活和可扩展的模式，可以用于许多不同的应用程序场景。将一个请求封装成一个对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，可以提供灵敏的撤销和恢复公共能。在命令模式中，会将一个请求封装为一个对象，以便使用不同参数来表示不同的请求（即命名），同时命令模式也支持可撤销的操作

**场景**：需要将请求调用者和请求接收者解耦，使得调用者和接收者不直接交互；需要在不同的时间指定请求、将请求排队和执行请求；需要支持命令的撤销操作和恢复操作，需要将一组操作组合在一起，即支持宏命令

**优点**：
* 1.降低系统的耦合度。
* 2.新的命令可以很容易地加入到系统中。
* 3.可以比较容易地设计一个命令队列和宏命令（组合命令）。
* 4.可以方便地实现对请求的Undo和Redo。


**不足**：使用命令模式可能会导致某些系统有过多的具体命令类。因为针对每一个命令都需要设计一个具体命令类，因此某些系统可能需要大量具体命令类，这将影响命令模式的使用

**具体示例**

```java
// 命令接口
interface Command {
    void execute();
}

// 具体命令类
class ConcreteCommand implements Command {
    private Receiver receiver;

    public ConcreteCommand(Receiver receiver) {
        this.receiver = receiver;
    }

    @Override
    public void execute() {
        receiver.action();
    }
}

// 接收者类
class Receiver {
    public void action() {
        System.out.println("Action performed.");
    }
}

// 调用者类
class Invoker {
    private Command command;

    public Invoker(Command command) {
        this.command = command;
    }

    public void invoke() {
        command.execute();
    }
}

// 客户端代码
public class CommandPatternExample {
    public static void main(String[] args) {
        Receiver receiver = new Receiver();
        Command command = new ConcreteCommand(receiver);
        Invoker invoker = new Invoker(command);

        invoker.invoke(); // 执行命令，将调用receiver的action方法
    }
}
```
在这个例子中，Command是一个接口，定义了一个方法execute。ConcreteCommand是Command的一个具体实现，它包含了一个Receiver的引用，并在execute方法中调用了Receiver的action方法。Receiver是一个接收者，它知道如何执行一个具体的动作。Invoker是一个调用者，它持有一个命令对象，并在其invoke方法中调用命令对象的execute方法。客户端代码创建了一个Receiver、一个ConcreteCommand、一个Invoker，并最终通过Invoker来执行命令。


