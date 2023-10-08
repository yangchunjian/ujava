package cn.ujava.design.flyweight;

public class Circle implements Shape {
    private String color;
    private int x;
    private int y;
    private int radius;
    public Circle(String color) {
        this.color = color;
    }
    public void setX(int x) {
        this.x = x;
    }
    public void setY(int y) {
        this.y = y;
    }
    public void setRadius(int radius) {
        this.radius = radius;
    }
    @Override
    public void draw() {
        System.out.println("画了一个" + color + "的圆，半径为" + radius + "，位置为(" + x + "," + y + ")");
    }
}

