package cn.ujava.design.visitor;

import cn.ujava.design.bridge.*;
import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {

        // 构建表达式树：1 + (2 + 3)
        Expression expression = new AdditionExpression(
                new NumberExpression(1),
                new AdditionExpression(
                        new NumberExpression(2),
                        new NumberExpression(3)
                )
        );
        // 计算表达式的值
        CalculatorVisitor calculator = new CalculatorVisitor();
        expression.accept(calculator);
        System.out.println("Result: " + calculator.getResult());
        // 打印表达式的字符串表示
        PrinterVisitor printer = new PrinterVisitor();
        expression.accept(printer);
    }
}
