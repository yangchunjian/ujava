package cn.ujava.design.responsibility;

public class ConcreteHandler1 extends AbstractHandler {
    public void handleRequest(Request request) {
        if (request.getType().equals("Type1")) {
            System.out.println("ConcreteHandler1 handles request " + request);
        } else {
            getNextHandler().handleRequest(request);
        }
    }
}
