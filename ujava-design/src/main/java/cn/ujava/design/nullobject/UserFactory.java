package cn.ujava.design.nullobject;

public class UserFactory {

    // 根据名称和权限创建一个用户
    public static User getUser(String name, boolean hasAccess) {
        if (name == null) {
            return new NullUser();
        }
        return new RealUser(name, hasAccess);
    }
}

