package cn.ujava.design.mediator;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {
        ConcreteMediator mediator = new ConcreteMediator();
        ConcreteColleague1 colleague1 = new ConcreteColleague1(mediator);
        ConcreteColleague2 colleague2 = new ConcreteColleague2(mediator);
        mediator.setColleague1(colleague1);
        mediator.setColleague2(colleague2);
        colleague1.send("Hello, Colleague2.");
        colleague2.send("Hello, Colleague1.");

    }
}
