package cn.ujava.design.responsibility;

public class ConcreteHandler3 extends AbstractHandler {
    public void handleRequest(Request request) {
        if (request.getType().equals("Type3")) {
            System.out.println("ConcreteHandler3 handles request " + request);
        } else {
            getNextHandler().handleRequest(request);
        }
    }
}
