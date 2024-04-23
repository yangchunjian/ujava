---
title: Java中设计模式
category: Java
icon: laptop-code
tag:
  - 设计Java
---

# 创建模式

## Singleton(单例)

只允许一个实例。
```java
java.lang.Runtime # getRuntime()
java.awt.Toolkit # getDefaultToolkit()
java.awt.GraphicsEnvironment # getLocalGraphicsEnvironment()
java.awt.Desktop # getDesktop()
java.lang.System # getSecurityManager()

```


## Abstract factory(抽象工厂)

创建一组有关联的对象实例。
```java
java.util.Calendar # getInstance()
java.util.Arrays # asList()
java.util.ResourceBundle # getBundle(String baseName)
java.sql.DriverManager # getConnection(String url)
java.sql.Connection # createStatement()
java.sql.Statement # executeQuery(String sql)
java.text.NumberFormat # getInstance()
javax.xml.transform.TransformerFactory # newInstance()
javax.xml.parsers.DocumentBuilderFactory # newInstance()
javax.xml.parsers.DocumentBuilderFactory # newInstance()

```


## Factory(工厂方法)

按照需求返回一个类型的实例。
```java
java.lang.Proxy # newProxyInstance()
java.lang.Object # toString()
java.lang.Class # newInstance()
java.lang.reflect.Array # newInstance()
java.lang.reflect.Constructor # newInstance()
java.lang.Boolean # valueOf(String s)
java.lang.Class # forName(String className)
java.util.Calendar # getInstance()
java.util.ResourceBundle # getBundle()
java.text.NumberFormat # getInstance()
java.nio.charset.Charset # forName()
java.net.URLStreamHandlerFactory # createURLStreamHandler(String)
javax.xml.bind.JAXBContext # createMarshaller()

```


## Builder(建造者)

主要用来简化一个复杂对象的创建。
```java
java.lang.StringBuilder # append(Object obj)(非线程安全)
java.lang.StringBuffer # append(Object obj)(线程安全)
javax.swing.GroupLayout.Group # addComponent()
java.nio.ByteBuffer # put()
所有的实现 java.lang.Appendable

```


## Prototype(原型)

使用自己的实例创建另外一个实例。
```java
java.lang.Object # clone()
java.lang.Cloneable;

```

# 结构模式

## Adapter(适配器)

可通过创建方法识别采用不同抽象/接口类型的实例，并返回自己/抽象/接口类型的实现，其装饰/覆盖给定实例。
```java
java.util.Arrays # asList()
javax.swing.JTable(TableModel)
java.io.InputStreamReader(InputStream)
java.io.OutputStreamWriter(OutputStream)
javax.xml.bind.annotation.adapters.XmlAdapter # marshal()
javax.xml.bind.annotation.adapters.XmlAdapter # unmarshal()
java.util.Collections # list()
java.util.Collections # enumeration()

```



## Composite(组合)

让使用者将单独对象和组合对象混用。
```java
javax.swing.JComponent # add(Component comp)
java.awt.Container # add(Component comp)
java.util.Map # putAll(Map m)
java.util.List # addAll(Collection c)
java.util.Set # addAll(Collection c)
javax.faces.component.UIComponent # getChildren()

```


## Decorator(装饰器)

为一个对象动态地加上一系列动作，而不需要因为这些动作的不同产生大量的继承类。
```java
java.io.BufferedInputStream(InputStream)
java.io.DataInputStream(InputStream)
java.io.BufferedOutputStream(OutputStream)
java.util.zip.ZipOutputStream(OutputStream)
java.util.Collections # checkedList(List list, Class type)
java.util.Collections的checkedXXX()，synchronizedXXX()和unmodifiableXXX()方法
javax.servlet.http.HttpServletRequestWrapper 和 HttpServletResponseWrapper


```

## Facade(门面)

一个简单的接口包装一组组件、接口、抽象或者子系统。
```java
java.lang.Class
javax.faces.webapp.FacesServlet

```

## Flyweight(享元模式)

使用缓存来加速大量小对象的访问时间。
```java
java.lang.Integer # valueOf(int)
java.lang.Boolean # valueOf(boolean)
java.lang.Byte # valueOf(byte)
java.lang.Character # valueOf(char)

```



## Proxy(代理)

用一个简单的对象代替一个复杂的对象。
```java
java.lang.reflect.Proxy
java.rmi.*
javax.ejb.EJB
javax.inject.Inject
javax.persistence.PersistenceContext

```


# 行为模式

## Chain of Responsibility(责任链)

一个对象在一个链接传递直到被处理。
```java
java.util.logging.Logger # log()
javax.servlet.Filter # doFilter()

```

## Command(命令)

将一系列命令封装成在一个类中。
```java
所有的实现 java.lang.Runnable
所有的实现 javax.swing.Action

```


## Interpreter(解释器)

定义语言的文法，并且建立一个解释器来解释该语言中的句子。
```java
java.util.Pattern
java.text.Normalizer
所有子类 java.text.Format
所有子类 javax.el.ELResolver

```


## Iterator(迭代器)

对象遍历。
```java
java.util.Iterator
java.util.Enumeration
java.util.Scanner

```


## Mediator(中介)

用一个中介对象来封装一系列关于对象交互行为。
```java
java.util.Timer
java.util.concurrent.Executor # execute()
java.util.concurrent.ExecutorService（invokeXXX()和submit()方法）
java.util.concurrent.ScheduledExecutorService（所有scheduleXXX()方法）
java.lang.reflect.Method # invoke()

```


## Memento(快照-备忘录模式)

保存另外一个对象内部状态拷贝的对象
```java
java.util.Date
java.io.Serializable

```


## Observer(观察者)

事件监听器。
```java
java.util.EventListener  
javax.servlet.http.HttpSessionBindingListener  
javax.servlet.http.HttpSessionAttributeListener  
javax.faces.event.PhaseListener

```


## State(状态)

不同的状态，不同的行为；或者说每个状态有相应的行为。
```java
java.util.Iterator  
javax.faces.lifecycle.LifeCycle # execute()

```

## Strategy(策略)

定义一系列算法，把这些算法一个一个封装成单独的类。
```java
java.util.Comparator # compare()
javax.servlet.http.HttpServlet
javax.servlet.Filter # doFilter()

```

## Template(模板)

定义一个操作中算法的骨架，将一些步骤的执行延迟到其子类中。
```java
java.util.Collections # sort()
java.io.InputStream # skip()
java.io.InputStream # read()
java.util.AbstractList # indexOf()

```

## Visitor(访问者)

作用于某个对象群中各个对象的操作，它可以使你在不改变这些对象本身的情况下，定义作用于这些对象的新操作。
```java
javax.lang.model.element.Element
javax.lang.model.element.ElementVisitor  
javax.lang.model.type.TypeMirror
javax.lang.model.type.TypeVisitor

```



