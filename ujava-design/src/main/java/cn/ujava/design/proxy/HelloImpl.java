package cn.ujava.design.proxy;

public class HelloImpl  implements IHello {
    @Override
    public String hi(String key) {
        String str = "hello:" + key;
        System.out.println("HelloImpl! " + str);
        return str;
    }
}
