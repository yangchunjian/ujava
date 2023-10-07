package cn.ujava.design.state;

import cn.ujava.design.bridge.*;
import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {

        Context context = new Context();
        State state1 = new ConcreteState1();
        State state2 = new ConcreteState2();
        context.setState(state1);
        context.request();
        context.setState(state2);
        context.request();

    }
}
