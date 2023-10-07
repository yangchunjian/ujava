package cn.ujava.design.composite;


import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {

        Component root = new Composite("root");
        Component branch1 = new Composite("branch1");
        Component branch2 = new Composite("branch2");
        IComponent leaf1 = new Leaf("leaf1");
        IComponent leaf2 = new Leaf("leaf2");
        IComponent leaf3 = new Leaf("leaf3");
        root.add(branch1);
        root.add(branch2);
        branch1.add(leaf1);
        branch2.add(leaf2);
        branch2.add(leaf3);
        root.display();


    }
}
