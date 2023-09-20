package cn.ujava.design.bridge;
import org.junit.jupiter.api.*;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {
        Color blue = new Blue();
        Shape square = new Square(new Red());
        Shape circle = new Circle(blue);
        square.applyColor();
        circle.applyColor();

    }
}
