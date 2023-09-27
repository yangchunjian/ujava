package cn.ujava.design.interpreter;

import java.util.HashMap;
import java.util.Map;

public class Context {
    private Map<String, Integer> variables = new HashMap<>();

    public void setVariable(String name, int value) {
        variables.put(name, value);
    }

    public int getVariable(String name) {
        return variables.get(name);
    }
}

