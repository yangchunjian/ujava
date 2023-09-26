package cn.ujava.design.responsibility;

public class Request {
    private String type;

    public Request(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public String toString() {
        return "Request [type=" + type + "]";
    }
}

