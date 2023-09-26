package cn.ujava.design.responsibility;

public interface Handler {
    Handler setNextHandler(Handler nextHandler);
    void handleRequest(Request request);
}
