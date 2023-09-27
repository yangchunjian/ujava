package cn.ujava.design.interpreter;

/**
 * 非终结符表达式
 */
public class AddExpression  implements Expression {
    private Expression left;
    private Expression right;
    public AddExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }
    public int interpret(Context context) {
        return left.interpret(context) + right.interpret(context);
    }
}
