package cn.ujava.design.strategy;

import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {
        PaymentProcessor processor = new PaymentProcessor(new CreditCardPayment("1234 5678 9012 3456", "123", "12/23"));
        processor.processPayment(100.0);
        processor.setStrategy(new PayPalPayment("example@example.com", "password"));
        processor.processPayment(50.0);
        processor.setStrategy(new CashPayment());
        processor.processPayment(25.0);

    }
}
