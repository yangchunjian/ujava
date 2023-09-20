package cn.ujava.design.bridge;

public class Circle  extends Shape {
    public Circle(Color color) {
        super(color);
    }
    @Override
    public void applyColor() {
        System.out.print("Circle applying color: ");
        color.applyColor();
    }
}
