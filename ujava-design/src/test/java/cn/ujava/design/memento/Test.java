package cn.ujava.design.memento;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {

        Originator originator = new Originator();
        Caretaker caretaker = new Caretaker();
        // 保存原始对象的状态到备忘录对象中
        originator.setState("State 1");
        caretaker.setMemento(originator.createMemento());
        // 修改原始对象的状态
        originator.setState("State 2");
        // 从备忘录对象中恢复先前的状态
        originator.restore(caretaker.getMemento());
        System.out.println("Current state: " + originator.getState());

    }
}
