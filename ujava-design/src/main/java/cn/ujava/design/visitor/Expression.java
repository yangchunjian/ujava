package cn.ujava.design.visitor;

public interface Expression {
    void accept(Visitor visitor);
}
