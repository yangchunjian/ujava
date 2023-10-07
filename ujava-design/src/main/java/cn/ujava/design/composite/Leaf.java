package cn.ujava.design.composite;

public class Leaf implements IComponent {
    private String name;

    public Leaf(String name) {
        this.name = name;
    }

    @Override
    public void display() {
        System.out.println("Leaf: " + name);
    }
}

