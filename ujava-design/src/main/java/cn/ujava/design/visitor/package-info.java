/**
 * 访问者模式
 * 示例：实现一个简单的计算器，它可以对表达式进行计算。我们将使用访问者模式来遍历表达式树，并对每个节点执行相应的操作。
 * 我们定了一个表达式接口Expression，并提供了两个表达式实现类数字表达式NumberExpression和加法表达式AdditionExpression，
 * 定义了一个访问者接口Visitor，以及两个具体访问者CalculatorVisitor、PrinterVisitor，两个访问者接收表达式对象，并在访问者中对表达式实现具体操作，分别是表达式运算以及表达式打印。
 *
 */
package cn.ujava.design.visitor;
