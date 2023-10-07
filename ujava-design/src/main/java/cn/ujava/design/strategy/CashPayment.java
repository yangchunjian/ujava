package cn.ujava.design.strategy;

public class CashPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paying " + amount + " using cash.");
    }
}

