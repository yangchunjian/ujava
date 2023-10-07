package cn.ujava.design.decorator;

public class Cheese extends ToppingDecorator {
    public Cheese(Pizza pizza) {
        super(pizza);
    }
    public String getDescription() {
        return pizza.getDescription() + "，马苏里拉奶酪";
    }
    public double getCost() {
        return pizza.getCost() + 0.50;
    }
}
