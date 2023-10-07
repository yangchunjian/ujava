package cn.ujava.design.filter;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {

        FilterChain chain = new FilterChain();
        chain.addFilter(new AuthenticationFilter());
        chain.addFilter(new LoggingFilter());

        chain.doFilter("request");


    }
}
