package cn.ujava.design.visitor;

public class PrinterVisitor  implements Visitor {
    public void visit(NumberExpression expression) {
        System.out.print(expression.getValue());
    }
    public void visit(AdditionExpression expression) {
        System.out.print("(");
        expression.getLeft().accept(this);
        System.out.print("+");
        expression.getRight().accept(this);
        System.out.print(")");
    }
}

