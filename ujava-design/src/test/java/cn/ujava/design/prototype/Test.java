package cn.ujava.design.prototype;

import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {
        ShapeCache.loadCache();
        Shape clonedShape = ShapeCache.getShape("1");
        System.out.println("Shape : " + clonedShape.getType());
        Shape clonedShape2 = ShapeCache.getShape("2");
        System.out.println("Shape : " + clonedShape2.getType());


    }
}
