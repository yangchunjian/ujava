package cn.ujava.design.visitor;

public class CalculatorVisitor implements Visitor {
    private int result;
    public void visit(NumberExpression expression) {
        result = expression.getValue();
    }
    public void visit(AdditionExpression expression) {
        expression.getLeft().accept(this);
        int leftValue = result;
        expression.getRight().accept(this);
        int rightValue = result;
        result = leftValue + rightValue;
    }
    public int getResult() {
        return result;
    }
}

