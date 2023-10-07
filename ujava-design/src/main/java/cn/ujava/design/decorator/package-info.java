/**
 * 装饰者模式
 * 示例：我们有一个 Pizza 接口，它定义了Pizza 的核心行为，包括其描述和成本。 然后我们有一个 PlainPizza 类，它实现了 Pizza 接口。
 * <p>
 * 接下来，我们创建一个抽象的 ToppingDecorator 类，它实现 Pizza 接口并具有对其装饰的 Pizza 对象的引用。 这允许我们向 Pizza 对象添加附加行为而不修改原始对象。
 * <p>
 * 最后，我们创建了两个具体的装饰器类 Cheese 和 Pepperoni ，它们向 Pizza 对象添加附加行为。 每个装饰器类修改 getDescription() 和 getCost() 方法以在委托给原始对象之前或之后添加自己的行为。
 */
package cn.ujava.design.decorator;
