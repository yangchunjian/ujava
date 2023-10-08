package cn.ujava.design.abstractfactory;

import org.junit.jupiter.api.BeforeEach;
import cn.ujava.design.abstractfactory.*;
class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {
        // 创建一个 Dog 对象
        AnimalFactory dogFactory = new DogFactory();
        Animal dog = dogFactory.createAnimal();
        dog.sound();

        // 创建一个 Cat 对象
        AnimalFactory catFactory = new CatFactory();
        Animal cat = catFactory.createAnimal();
        cat.sound();

    }
}
