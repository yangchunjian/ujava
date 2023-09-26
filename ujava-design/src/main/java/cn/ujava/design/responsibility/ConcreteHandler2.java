package cn.ujava.design.responsibility;

public class ConcreteHandler2  extends AbstractHandler {
    public void handleRequest(Request request) {
        if (request.getType().equals("Type2")) {
            System.out.println("ConcreteHandler2 handles request " + request);
        } else {
            getNextHandler().handleRequest(request);
        }
    }
}

