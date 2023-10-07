/**
 * 备忘录模式
 * 示例：Originator类表示原始对象，它包含需要保存的状态。createMemento()方法创建备忘录对象，并将当前状态保存到备忘录对象中。restore()方法用于从备忘录对象中恢复先前的状态。
 * <p>
 * Memento类表示备忘录对象，它包含需要保存的状态。
 * <p>
 * Caretaker类负责管理备忘录对象，它包含一个Memento对象。
 */
package cn.ujava.design.memento;
