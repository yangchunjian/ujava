/**
 * 组合模式
 * 示例：其中我们使用一个抽象类Component来表示树形结构中的节点，包括叶节点和组合节点。
 * <p>
 * 组合节点包含子节点，可以通过add()和remove()方法来添加和删除子节点。叶节点没有子节点，但可以实现共同的操作方法。具体的组合节点继承自Component类，实现自己的操作方法。
 */
package cn.ujava.design.composite;
