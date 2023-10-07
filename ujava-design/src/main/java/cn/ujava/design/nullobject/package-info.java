/**
 * 空对象模式
 * 示例：我们定义了一个接口User，它表示一个用户，并包含两个方法：getName()和hasAccess()。
 * <p>
 * 接着，我们定义了一个具体类RealUser，它表示一个真实的用户，并实现了User接口的两个方法。
 * <p>
 * 我们还定义了一个空对象NullUser，它表示一个空的用户，并实现了User接口的两个方法。最后，我们定义了一个工厂类UserFactory，用于创建用户。如果传入的名称为null，则返回一个空对象NullUser，否则返回一个真实的用户RealUser。
 */
package cn.ujava.design.nullobject;
