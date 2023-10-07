package cn.ujava.design.decorator;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {


        Pizza pizza = new PlainPizza();
        pizza = new Cheese(pizza);
        pizza = new Pepperoni(pizza);
        System.out.println(pizza.getDescription());
        System.out.println("成本：$" + pizza.getCost());

    }
}
