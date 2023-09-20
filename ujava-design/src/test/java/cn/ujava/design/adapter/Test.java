package cn.ujava.design.adapter;

import org.junit.jupiter.api.BeforeEach;

import java.util.HashMap;
import java.util.Map;

import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.verify;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void testAdapter() {
        Adaptee adaptee = new Adaptee();
        Target target = new Adapter(adaptee);
        target.request();

    }
}
