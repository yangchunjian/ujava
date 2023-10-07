/**
 * 原型模式
 * 示例：Shape是一个抽象类，它实现了Cloneable接口并重写了clone()方法。Circle和Square是Shape的具体子类，它们实现了draw()方法。ShapeCache类是一个缓存，它存储了Shape对象的副本。PrototypePatternDemo类是一个演示类，它使用ShapeCache来获取Shape对象的副本。
 * <p>
 * 在loadCache()方法中，我们创建了两个Shape对象的副本，并将它们存储在shapeMap中。
 */
package cn.ujava.design.prototype;
