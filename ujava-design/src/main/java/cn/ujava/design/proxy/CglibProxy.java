package cn.ujava.design.proxy;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.InvocationHandler;

import java.lang.reflect.Method;

/**
 * cglib动态代理
 */
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

