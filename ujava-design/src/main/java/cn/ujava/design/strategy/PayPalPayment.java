package cn.ujava.design.strategy;

public class PayPalPayment implements PaymentStrategy {
    private String email;
    private String password;
    public PayPalPayment(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public void pay(double amount) {
        System.out.println("Paying " + amount + " using PayPal.");
    }
}
