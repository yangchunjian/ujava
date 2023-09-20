package cn.ujava.design.visitor;

public interface Visitor {
    void visit(NumberExpression expression);

    void visit(AdditionExpression expression);
}
