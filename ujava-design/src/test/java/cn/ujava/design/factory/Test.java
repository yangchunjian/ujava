package cn.ujava.design.factory;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {
        // 使用工厂类创建不同的 Animal 对象
        Animal dog = AnimalFactory.createAnimal("dog");
        dog.sound();
        Animal cat = AnimalFactory.createAnimal("cat");
        cat.sound();

    }
}
