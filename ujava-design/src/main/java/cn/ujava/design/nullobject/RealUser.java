package cn.ujava.design.nullobject;

public class RealUser  implements User {
    private String name;
    private boolean hasAccess;
    public RealUser(String name, boolean hasAccess) {
        this.name = name;
        this.hasAccess = hasAccess;
    }
    public String getName() {
        return name;
    }
    public boolean hasAccess() {
        return hasAccess;
    }
}

