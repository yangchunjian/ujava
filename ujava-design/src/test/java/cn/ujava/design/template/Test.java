package cn.ujava.design.template;

import org.junit.jupiter.api.BeforeEach;

class Test {

    @BeforeEach
    void setup() {
    }

    @org.junit.jupiter.api.Test
    void test() {

        Game game = new Cricket();
        game.play();
        System.out.println();
        game = new Football();
        game.play();

    }
}
