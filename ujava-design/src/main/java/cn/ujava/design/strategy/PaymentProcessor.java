package cn.ujava.design.strategy;

public class PaymentProcessor {
    private PaymentStrategy strategy;
    public PaymentProcessor(PaymentStrategy strategy) {
        this.strategy = strategy;
    }
    public void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }
    public void processPayment(double amount) {
        strategy.pay(amount);
    }
}
