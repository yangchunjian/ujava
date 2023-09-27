package cn.ujava.design.iterator;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {
        Integer[] array = {1, 2, 3, 4, 5};
        Iterator<Integer> iterator = new ArrayIterator<>(array);
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }


    }
}
