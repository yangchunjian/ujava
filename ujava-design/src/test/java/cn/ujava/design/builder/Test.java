package cn.ujava.design.builder;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void testAdapter() {

        Car car = new CarBuilder().setMake("1").build();

    }
}
