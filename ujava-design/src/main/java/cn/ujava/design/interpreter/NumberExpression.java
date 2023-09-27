package cn.ujava.design.interpreter;

/**
 * 终结符表达式
 */
public class NumberExpression implements Expression {
    private int value;

    public NumberExpression(int value) {
        this.value = value;
    }

    public int interpret(Context context) {
        return value;
    }
}

