package cn.ujava.design.decorator;

public class Pepperoni extends ToppingDecorator {
    public Pepperoni(Pizza pizza) {
        super(pizza);
    }

    public String getDescription() {
        return pizza.getDescription() + "，意大利辣香肠";
    }

    public double getCost() {
        return pizza.getCost() + 1.00;
    }
}

