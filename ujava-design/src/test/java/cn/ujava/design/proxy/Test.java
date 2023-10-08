package cn.ujava.design.proxy;

import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    /**
     * 静态代理
     */
    @org.junit.jupiter.api.Test
    void test() {
        IHello helloProxy = new HelloStaticProxy(new HelloImpl());
        helloProxy.hi("world");
    }

    /**
     * jdk动态代理
     */
    @org.junit.jupiter.api.Test
    void test1() {
        JdkProxy proxy = new JdkProxy(new HelloImpl());
        IHello helloProxy = proxy.getProxy();
        helloProxy.hi(" jdk proxy !");
    }

    /**
     * cglib动态代理
     */
    @org.junit.jupiter.api.Test
    void test2() {
        HelloImpl hello = new HelloImpl();
        CglibProxy cglibProxy = new CglibProxy(hello);
        HelloImpl proxy = cglibProxy.getProxy();
        proxy.hi(" cglib ");

    }
}
