package cn.ujava.design.bridge;

public class Square  extends Shape {
    public Square(Color color) {
        super(color);
    }
    @Override
    public void applyColor() {
        System.out.print("Square applying color: ");
        color.applyColor();
    }
}
