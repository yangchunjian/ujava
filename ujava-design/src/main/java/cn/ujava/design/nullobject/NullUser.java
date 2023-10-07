package cn.ujava.design.nullobject;

public class NullUser  implements User {
    public String getName() {
        return "Guest";
    }
    public boolean hasAccess() {
        return false;
    }
}

