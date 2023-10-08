package cn.ujava.design.facade;

import cn.ujava.design.factory.Animal;
import cn.ujava.design.factory.AnimalFactory;
import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {
        ComputerFacade computer = new ComputerFacade();
        computer.start();

    }
}
