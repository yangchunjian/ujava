package cn.ujava.design.mediator;

public interface Mediator {
    void send(String message, Colleague colleague);

}
