/**
 * 责任链模式
 * 示例：如何创建一个处理器链，并将请求沿着链传递，直到有一个处理程序处理它为止。
 * 在这个例子中，ConcreteHandler1、ConcreteHandler2和ConcreteHandler3都是具体的处理器类，它们继承自AbstractHandler类，并实现handleRequest方法。客户端代码创建了一个处理器链，并将请求发送到链的第一个处理器。当请求到达处理器时，它会检查请求类型是否与处理器可以处理的类型匹配。如果是，处理器将处理请求。否则，它将请求传递给链中的下一个处理器，直到有一个处理程序处理它为止。
 */
package cn.ujava.design.responsibility;
