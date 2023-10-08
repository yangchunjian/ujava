package cn.ujava.design.flyweight;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    private static final String[] colors = {"红色", "绿色", "蓝色", "黄色", "黑色"};

    @org.junit.jupiter.api.Test
    void test() {
        for (int i = 0; i < 20; i++) {
            Circle circle = (Circle) ShapeFactory.getCircle(getRandomColor());
            circle.setX(getRandomX());
            circle.setY(getRandomY());
            circle.setRadius(100);
            circle.draw();
        }
    }

    private static String getRandomColor() {
        return colors[(int) (Math.random() * colors.length)];
    }

    private static int getRandomX() {
        return (int) (Math.random() * 100);
    }

    private static int getRandomY() {
        return (int) (Math.random() * 100);
    }

}
