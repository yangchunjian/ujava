---
title: JDK中用到的设计模式
category: Java
icon: laptop-code
tag:
  - 设计Java
---


## 桥接模式

这个模式将抽象和抽象操作的实现进⾏了解耦，这样使得抽象和实现可以 独⽴地变化。

在 Java 应⽤中，对于桥接模式有⼀个⾮常典型的例⼦，就是应⽤程序使⽤
JDBC 驱动程序进⾏开发的⽅式。所谓驱动程序，指的是按照预先约定好
的接⼝来操作计算机系统或者是外围设备的程序。

## 适配器模式

⽤来把⼀个接⼝转化成另⼀个接⼝。使得原本由于接⼝不兼容⽽不能⼀起 ⼯作的那些类可以在⼀起⼯作。
```java
java.util.Arrays#asList()
java.io.InputStreamReader(InputStream)
java.io.OutputStreamWriter(OutputStream)

```

## 组合模式

⼜叫做部分-整体模式，使得客户端看来单个对象和对象的组合是同等的。 换句话说，某个类型的⽅法同时也接受⾃身类型作为参数。
```java
java.util.Map#putAll(Map)
java.util.List#addAll(Collection)
java.util.Set#addAll(Collection)

```

## 装饰者模式

动态的给⼀个对象附加额外的功能，这也是⼦类的⼀种替代⽅式。可以看 到，在创建⼀个类型的时候，同时也传⼊同⼀类型的对象。这在 JDK ⾥随 处可⻅，你会发现它⽆处不在，所以下⾯这个列表只是⼀⼩部分。

```java
java.io.BufferedInputStream(InputStream)
java.io.DataInputStream(InputStream)
java.io.BufferedOutputStream(OutputStream)
java.util.zip.ZipOutputStream(OutputStream)
java.util.Collections#checkedList|Map|Set|SortedSet|SortedMap
```

## 享元模式

使⽤缓存来加速⼤量⼩对象的访问时间。

```java
java.lang.Integer#valueOf(int)
java.lang.Boolean#value
java.lang.Integer#valueOf(int)   -127-128
java.lang.Boolean#valueOf(boolean)
java.lang.Byte#valueOf(byte)
java.lang.Character#valueOf(char)

```


## 代理模式

代理模式是⽤⼀个简单的对象来代替⼀个复杂的或者创建耗时的对象。
```java
java.lang.reflect.Proxy
RMI

```

## 抽象⼯⼚模式

抽象⼯⼚模式提供了⼀个协议来⽣成⼀系列的相关或者独⽴的对象，⽽不 ⽤指定具体对象的类型。它使得应⽤程序能够和使⽤的框架的具体实现进 ⾏解耦。这在 JDK 或者许多框架⽐如 Spring 中都随处可⻅。它们也很容 易识别，⼀个创建新对象的⽅法，返回的却是接⼝或者抽象类的，就是抽 象⼯⼚模式了。
```java
java.util.Calendar#getInstance()
java.util.Arrays#asList()
java.util.ResourceBundle#getBundle()
java.sql.DriverManager#getConnection()
java.sql.Connection#createStatement()
java.sql.Statement#executeQuery()
java.text.NumberFormat#getInstance()
javax.xml.transform.TransformerFactory#newInstance()

```

## 建造者模式

定义了⼀个新的类来构建另⼀个类的实例，以简化复杂对象的创建。建造 模式通常也使⽤⽅法链接来实现。
```java
java.lang.StringBuilder#append()
java.lang.StringBuffer#append()
java.sql.PreparedStatement
javax.swing.GroupLayout.Group#addComponent()

```

## ⼯⼚⽅法

就是⼀个返回具体对象的⽅法。
```java
java.lang.Proxy#newProxyInstance()
java.lang.Object#toString()
java.lang.Class#newInstance()
java.lang.reflect.Array#newInstance()
java.lang.reflect.Constructor#newInstance()
java.lang.Boolean#valueOf(String)
java.lang.Class#forName()

```

## 原型模式

使得类的实例能够⽣成⾃身的拷⻉。如果创建⼀个对象的实例⾮常复杂且 耗时时，就可以使⽤这种模式，⽽不重新创建⼀个新的实例，你可以拷⻉ ⼀个对象并直接修改它。

```java
java.lang.Object#clone()
java.lang.Cloneable

```

## 单例模式

⽤来确保类只有⼀个实例。 Joshua Bloch 在 Effetive Java 中建议到，还有 ⼀种⽅法就是使⽤枚举。

```java

java.lang.Runtime#getRuntime()
java.awt.Toolkit#getDefaultToolkit()
java.awt.GraphicsEnvironment#getLocalGraphicsEnvironment()
java.awt.Desktop#getDesktop()
```




## 责任链模式

通过把请求从⼀个对象传递到链条中下⼀个对象的⽅式，直到请求被处理
完毕，以实现对象间的解耦

```java
java.util.logging.Logger#log()
javax.servlet.Filter#doFilter()

```

## 命令模式

将操作封装到对象内，以便存储，传递和返回。
```java
java.lang.Runnable
javax.swing.Action

```

## 解释器模式

这个模式通常定义了⼀个语⾔的语法，然后解析相应语法的语句
```java
java.util.Pattern
java.text.Normalizer
java.text.Format

```

## 迭代器模式

提供⼀个⼀致的⽅法来顺序访问集合中的对象，这个⽅法与底层的集合的 具体实现⽆关。

```java

java.util.Iterator
java.util.Enumeration

```

## 中介者模式

通过使⽤⼀个中间对象来进⾏消息分发以及减少类之间的直接依赖。
```java
java.util.Timer
java.util.concurrent.Executor#execute()
java.util.concurrent.ExecutorService#submit()
java.lang.reflect.Method#invoke()

```

## 备忘录模式

⽣成对象状态的⼀个快照，以便对象可以恢复原始状态⽽不⽤暴露⾃身的
内容。 Date 对象通过⾃身内部的⼀个 long 值来实现备忘录模式。

```java
java.util.Date
java.io.Serializable

```

## 观察者模式

它使得⼀个对象可以灵活的将消息发送给感兴趣的对象。
```java
java.util.EventListener
javax.servlet.http.HttpSessionBindingListener
javax.servlet.http.HttpSessionAttributeListener
javax.faces.event.PhaseListener

```

## 策略模式

使⽤这个模式来将⼀组算法封装成⼀系列对象。通过传递这些对象可以灵
活的改变程序的功能。
```java
java.util.Comparator#compare()
javax.servlet.http.HttpServlet
javax.servlet.Filter#doFilter()

```

## 模板⽅法模式

让⼦类可以重写⽅法的⼀部分，⽽不是整个重写，你可以控制⼦类需要重 写那些操作。

```java
java.util.Collections#sort()
java.io.InputStream#skip()
java.io.InputStream#read()
java.util.AbstractList#indexOf()

```

## 访问者模式

提供⼀个⽅便的可维护的⽅式来操作⼀组对象。它使得你在不改变操作的 对象前提下，可以修改或者扩展对象的⾏为。
```java
javax.lang.model.element.Element and
javax.lang.model.element.ElementVisitor
javax.lang.model.type.TypeMirror and
javax.lang.model.type.TypeVisitor

```

## 状态模式

通过改变对象内部的状态，使得你可以在运⾏时动态改变⼀个对象的⾏ 为

```java
java.util.Iterator
javax.faces.lifecycle.LifeCycle#execute()

```

