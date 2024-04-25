---
title: 组合模式
icon: laptop-code
category:
- 设计模式
tag:
- 设计模式
---

## 概述




**介绍**：组合模式是一种结构型设计模式，它允许你将对象组合成`树形结构以表示“部分-整体”的层次结构`。这种模式使得客户端可以统一对待单个对象和对象组合。组合模式所应用的就是树形结构以表达“部分/整体”的层次结构。主要是用来处理树形结构数据，`与其说是一种设计模式，倒不如说是对业务场景的一种数据结构和算法的抽象`。在组合模式中，有两种基本类型的对象：叶节点和组合节点。叶节点表示树形结构中的单个对象，而组合节点则表示树形结构中的对象组合。组合节点可以包含其他组合节点和/或叶节点，形成一个递归的树形结构。

**场景**：
* 1.适用于处理树形结构
* 2.忽略差异 : 希望客户端`可以忽略 组合对象 与 单个对象 的差异`

`SpringMVC框架中，Security Oauth2框架中`

**优点**：
* 1.定义层次 : 清楚地 定义 分层次 的 复杂对象 , 表示 对象 的 全部 或 部分 层次 
* 2.忽略层次 : 让 客户端 忽略 层次之间的差异 , 方便对 整个层次结构 进行控制 
* 3.简化客户端代码 
* 4.符合开闭原则 

**不足**：
* 1.限制类型复杂 : `限制类型时 , 比较复杂` 
* 2.使设计变得更加抽象 

**具体示例**

```java
interface Component {
    void operation();
}
 
class Leaf implements Component {
    private String name;
 
    public Leaf(String name) {
        this.name = name;
    }
 
    @Override
    public void operation() {
        System.out.println("Leaf " + name + " operation.");
    }
}
 
class Composite implements Component {
    private String name;
    private List<Component> children = new ArrayList<>();
 
    public Composite(String name) {
        this.name = name;
    }
 
    public void add(Component component) {
        children.add(component);
    }
 
    public void remove(Component component) {
        children.remove(component);
    }
 
    @Override
    public void operation() {
        System.out.println("Composite " + name + " operation.");
        for (Component component : children) {
            component.operation();
        }
    }
}
 
public class CompositePatternExample {
    public static void main(String[] args) {
        Composite root = new Composite("Root");
        root.add(new Leaf("Leaf A"));
        root.add(new Leaf("Leaf B"));
 
        Composite branch = new Composite("Branch");
        branch.add(new Leaf("Leaf C"));
        branch.add(new Leaf("Leaf D"));
 
        root.add(branch);
        root.operation();
    }
}
```
在这个例子中，Component是组合中对象的接口，Leaf是叶节点，不能有子节点，Composite是组合，可以有子节点。Composite实现了operation方法，它会遍历并调用所有子节点的operation方法。这样，无论是叶节点还是组合，它们的处理方式都是一致的。
