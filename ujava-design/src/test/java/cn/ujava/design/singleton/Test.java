package cn.ujava.design.singleton;

import cn.ujava.design.state.ConcreteState1;
import cn.ujava.design.state.ConcreteState2;
import cn.ujava.design.state.Context;
import cn.ujava.design.state.State;
import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {
        Singleton s = Singleton.getInstance();
        Person p = PersonEnum.INSTANCE.getInstance();
        PersonSingleton ps = PersonSingleton.INSTANCE;


    }
}
