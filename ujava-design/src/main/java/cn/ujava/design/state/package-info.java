/**
 * 状态模式
 * 示例：
 * 我们定义了一个状态接口State和两个具体状态类ConcreteState1和ConcreteState2。我们还定义了一个环境类Context，它包含一个状态对象，并定义了一个请求方法request()，用于调用当前状态对象的handle()方法。在客户端代码中，我们创建了一个Context对象，并设置它的状态为ConcreteState1，然后调用request()方法，输出"ConcreteState1 is handling.“。接着，我们将Context的状态设置为ConcreteState2，并再次调用request()方法，输出"ConcreteState2 is handling.”。
 * <p>
 * 通过使用状态模式，我们可以将状态和行为分离，使得对象的行为可以随着状态的改变而改变，从而实现更加灵活的设计。
 */
package cn.ujava.design.state;
