package cn.ujava.design.mediator;

public class ConcreteColleague2 extends Colleague {
    public ConcreteColleague2(Mediator mediator) {
        super(mediator);
    }
    @Override
    public void receive(String message) {
        System.out.println("Colleague2 received message: " + message);
    }
    @Override
    public void send(String message) {
        System.out.println("Colleague2 sends message: " + message);
        mediator.send(message, this);
    }
}

