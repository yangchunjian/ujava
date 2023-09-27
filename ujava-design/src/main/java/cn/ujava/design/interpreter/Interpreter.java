package cn.ujava.design.interpreter;

public class Interpreter{
        private Expression expression;
        public Interpreter(Expression expression) {
            this.expression = expression;
        }
        public int interpret(Context context) {
            return expression.interpret(context);
        }
}

