/**
 * 策略模式
 * 示例：
 * PaymentStrategy 接口定义了一种支付方式，并包含一个 pay 方法，该方法接受一个金额参数。
 * <p>
 * 我们创建了三个实现该接口的类，分别代表信用卡支付、PayPal支付和现金支付。 PaymentProcessor 类接受一个 PaymentStrategy 实例作为参数，并使用它来执行支付操作。
 */
package cn.ujava.design.strategy;
