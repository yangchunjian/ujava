package cn.ujava.design.observer;

public interface Observer {
    void update(float temperature, float humidity, float pressure);
    String name();
}
