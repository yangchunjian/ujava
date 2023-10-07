package cn.ujava.design.mediator;

public class ConcreteColleague1 extends Colleague {
    public ConcreteColleague1(Mediator mediator) {
        super(mediator);
    }
    @Override
    public void receive(String message) {
        System.out.println("Colleague1 received message: " + message);
    }
    @Override
    public void send(String message) {
        System.out.println("Colleague1 sends message: " + message);
        mediator.send(message, this);
    }
}

