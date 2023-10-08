---
title: 代理模式
index: false
icon: laptop-code
category:
- 设计模式
---

## 概述

代理模式是项目中常用的一种设计模式。提供了间接访问目标对象的一种方式；即通过代理对象访问目标对象。

这样做的好处是，可以在不改变原有目标对象的基础上，对目标对象增加额外的扩展功能。

代理模式又分为静态代理、jdk动态代理、cglib动态代理三种实现方式。

三种实现方式各有优点，以及适用的场景：

* 静态代理：代理类必须非常明确，所以无法做到通用，但是效率也是最高的
* jdk动态代理：必须基于接口代理，有一定局限性；动态生成字节码文件，可以用于通用业务（性能日志等）
* cglig动态代理：也是动态生成字节码文件，生成的代理类继承了目标对象
* spring aop默认代理策略是：如果目标对象实现了接口，则使用jdk动态代理，否则使用cglib代理
* jdk8之后，jdk动态代理效率要高于cglib代理

## 1）静态代理

被代理对象与代理对象需要实现相同的接口或者是继承相同父类，因此要定义一个接口或抽象类。

```java
/**代理接口*/
public interface IHello {
    String hi(String key);
}
/**代理接口实现类*/
public class HelloImpl implements IHello {
    @Override
    public String hi(String key) {
        String str = "hello:" + key;
        System.out.println("HelloImpl! " + str);
        return str;
    }
}
/**静态代理类*/
public class HelloStaticProxy implements IHello {

    private IHello hello;

    public HelloStaticProxy(IHello hello) {
        this.hello = hello;
    }

    @Override
    public String hi(String key) {
        System.out.println(">>> static proxy start");
        String result = hello.hi(key);
        System.out.println(">>> static proxy end");
        return result;
    }
}
/**测试*/
public class DemoTest {

    public static void main(String[] args) {
        IHello helloProxy = new HelloStaticProxy(new HelloImpl());
        helloProxy.hi("world");
    }
}

```

## 2）jdk动态代理

jdk动态代理是基于接口的一种代理方式，目标对象一定要实现接口。

原理是，利用反射机制，动态生成匿名类继承Proxy类并且实现了要代理的接口，由于java不支持多继承，所以JDK动态代理不能代理类

```java
/**代理接口*/
public interface IHello {
    String hi(String key);
}
/**代理接口实现类*/
public class HelloImpl implements IHello {
    @Override
    public String hi(String key) {
        String str = "hello:" + key;
        System.out.println("HelloImpl! " + str);
        return str;
    }
}


/**jdk动态代理类*/
public class JdkProxy implements InvocationHandler {

    private Object target;

    public JdkProxy(Object target) {
        this.target = target;
    }

    /**
     * 获取被代理接口实例对象
     *
     * @param <T>
     * @return
     */
    public <T> T getProxy() {
        return (T) Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), this);
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(">>> JdkProxy start");
        Object result = method.invoke(target, args);
        System.out.println(">>> JdkProxy end");
        return result;
    }
}

/**测试*/
public class Demo2Test {

    public static void main(String[] args) {
        JdkProxy proxy = new JdkProxy(new HelloImpl());
        IHello helloProxy = proxy.getProxy();
        helloProxy.hi(" jdk proxy !");
    }
}

```

## 3）cglib动态代理

目标对象可以不用实现接口，不能针对final类进行代理。

原理是，动态生成class继承目标对象。使用cglib必须引入对应的jar包

```xml
 <dependency>
    <groupId>cglib</groupId>
    <artifactId>cglib</artifactId>
    <version>3.2.7</version>
</dependency>

```

```java
/**目标类*/
public class HelloImpl {
    public String hi(String key) {
        String str = "hello:" + key;
        System.out.println("HelloImpl! " + str);
        return str;
    }
}

/**cglib代理类*/
public class CglibProxy implements InvocationHandler {

    private Object target;

    /**
     * 获取被代理接口实例对象
     */
    public <T> T getProxy() {
        //1创建增强器对象
        Enhancer e = new Enhancer();
        //2设置增强器的类加载器
        e.setClassLoader(target.getClass().getClassLoader());
        //3设置代理对象父类类型
        e.setSuperclass(target.getClass());
        //4设置回调函数
        e.setCallback(this);
        //5创建代理对象
        return (T) e.create();
    }

    public CglibProxy(Object target) {
        this.target = target;
    }
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(">>> cglib start");
        Object obj = method.invoke(target, args);
        System.out.println(">>> cglib end");
        return obj;
    }
}

/**测试*/
public class Demo3Test {

    public static void main(String[] args) {
        HelloImpl hello = new HelloImpl();
        CglibProxy cglibProxy = new CglibProxy(hello);
        HelloImpl proxy = cglibProxy.getProxy();
        proxy.hi(" cglib ");
    }
}



```
