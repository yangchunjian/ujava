package cn.ujava.design.visitor;

public class NumberExpression  implements Expression {
    private int value;
    public NumberExpression(int value) {
        this.value = value;
    }
    public int getValue() {
        return value;
    }
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}
