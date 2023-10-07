package cn.ujava.design.decorator;

public class PlainPizza  implements Pizza {
    public String getDescription() {
        return "薄饼";
    }
    public double getCost() {
        return 4.00;
    }
}

