---
title: 责任链模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述

**介绍**：如果有多个对象有机会处理请求，**责任链可使请求的发送者和接受者解耦，请求沿着责任链传递，直到有一个对象处理了它为止**

**场景**：
* 1.多个对象可以处理同一个请求，但具体由哪个对象处理则在运行时动态决定。
* 2. 在请求处理者不明确的情况下向对个对象中的一个提交一个请求。
* 3. 需要**动态处理一组对象处理请求**。

常用在框架开发中，用来**实现过滤器、拦截器**功能，让框架的使用者在不需要修改框架源码的情况下，添加新的过滤、拦截功能。 Servlet 中的过滤器 Filter 

**优点**：
* 1.**解耦** : 请求的 发送者 和 接收者 解耦 ; 接收者 是 请求的处理者 ;
* 2.**动态组合** : 责任链 可以 动态组合 , 使用配置 设置责任链的 顺序及 是否出现 ; **可以随时对责任链排序 , 随时增加拆除责任链中的某个请求对象** ;

**不足**：
* 1.性能 : 如果 责任链 太长 , 或责任链中请求的 处理时间过长 , 可能会 影响性能 ;
* 2.个数 : 责任链 可能过多 ;

责任链模式是一种行为设计模式，它允许将请求沿着处理链进行传递，直到有一个处理程序处理它为止。在Java中实现责任链模式通常需要以下几个步骤：

* 定义一个处理器接口，该接口包含一个处理请求的方法。
* 创建一个抽象处理器类，它实现处理器接口，并包含一个指向下一个处理器的引用。
* 创建具体的处理器类，它们继承自抽象处理器类，并实现处理请求的方法。
* 在客户端代码中，创建处理器链，并将请求发送到链的第一个处理器。

## 具体示例

```java
// 抽象处理者
abstract class Handler {
    protected Handler nextHandler;
 
    public Handler setNext(Handler nextHandler) {
        this.nextHandler = nextHandler;
        return nextHandler; // 返回nextHandler使得setNext可以链式调用
    }
 
    public abstract void handleRequest(Request request);
}
 
// 实际处理者
class ConcreteHandler1 extends Handler {
    @Override
    public void handleRequest(Request request) {
        if (request.getType() == RequestType.TYPE1) {
            // 处理类型1的请求
            System.out.println("处理类型1的请求");
        } else {
            nextHandler.handleRequest(request); // 转发请求给下一个处理者
        }
    }
}
 
class ConcreteHandler2 extends Handler {
    @Override
    public void handleRequest(Request request) {
        if (request.getType() == RequestType.TYPE2) {
            // 处理类型2的请求
            System.out.println("处理类型2的请求");
        } else {
            nextHandler.handleRequest(request); // 转发请求给下一个处理者
        }
    }
}
 
// 请求类型
enum RequestType {
    TYPE1, TYPE2
}
 
// 请求类
class Request {
    private RequestType type;
 
    public Request(RequestType type) {
        this.type = type;
    }
 
    public RequestType getType() {
        return type;
    }
}
 
// 客户端代码
public class Client {
    public static void main(String[] args) {
        Handler handler1 = new ConcreteHandler1();
        Handler handler2 = new ConcreteHandler2();
 
        handler1.setNext(handler2); // 设置责任链
 
        // 发送请求
        handler1.handleRequest(new Request(RequestType.TYPE1));
        handler1.handleRequest(new Request(RequestType.TYPE2));
    }
}
```

在这个例子中，我们定义了一个请求类型RequestType和请求类Request。然后，我们定义了一个抽象处理者Handler，它有一个指向下一个处理者的引用。接着，我们创建了两个具体的处理者ConcreteHandler1和ConcreteHandler2，它们实现了handleRequest方法来处理它们负责的请求类型。最后，在客户端代码中，我们设置了责任链，并发送了两个不同类型的请求，观察处理者如何处理这些请求。

