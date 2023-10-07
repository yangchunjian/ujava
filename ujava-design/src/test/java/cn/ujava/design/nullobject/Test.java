package cn.ujava.design.nullobject;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {
        User user1 = UserFactory.getUser("Alice", true);
        User user2 = UserFactory.getUser(null, false);
        System.out.println("User 1: " + user1.getName() + ", has access: " + user1.hasAccess());
        System.out.println("User 2: " + user2.getName() + ", has access: " + user2.hasAccess());

    }
}
