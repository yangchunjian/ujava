package cn.ujava.design.interpreter;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {


        // 创建上下文
        Context context = new Context();
        context.setVariable("a", 10);
        context.setVariable("b", 20);
        // 创建表达式
        Expression expression = new AddExpression(
                new NumberExpression(context.getVariable("a")),
                new NumberExpression(context.getVariable("b"))
        );
        // 创建解释器并执行表达式
        Interpreter interpreter = new Interpreter(expression);
        int result = interpreter.interpret(context);
        System.out.println("Result: " + result);

    }
}
