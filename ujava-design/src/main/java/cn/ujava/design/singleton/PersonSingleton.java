package cn.ujava.design.singleton;

/**
 * 直接新建枚举类
 * PersonSingleton.INSTANCE
 */
public enum PersonSingleton {
    INSTANCE;

    private String name;
    public String getName() {
        return name;
    }
}
