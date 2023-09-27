package cn.ujava.design.command;

import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {

        CommandExecutor executor = new CommandExecutor();
        executor.executeCommand("create", new String[]{"file.txt", "Hello World!"});
        executor.executeCommand("delete", new String[]{"file.txt"});
        executor.executeCommand("unknown", new String[]{});

    }
}
