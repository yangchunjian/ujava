package cn.ujava.design.responsibility;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void testAdapter() {


        Handler handler1 = new ConcreteHandler1();
        Handler handler2 = new ConcreteHandler2();
        Handler handler3 = new ConcreteHandler3();
        handler1.setNextHandler(handler2)
                .setNextHandler(handler3);
        handler1.handleRequest(new Request("Type1"));
        handler1.handleRequest(new Request("Type2"));
        handler1.handleRequest(new Request("Type3"));


    }
}
