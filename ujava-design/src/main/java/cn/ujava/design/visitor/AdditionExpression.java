package cn.ujava.design.visitor;

public class AdditionExpression  implements Expression {
    private Expression left;
    private Expression right;
    public AdditionExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }
    public Expression getLeft() {
        return left;
    }
    public Expression getRight() {
        return right;
    }
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}
