package cn.ujava.design.composite;

public abstract class Component implements IComponent {
    protected String name;

    public Component(String name) {
        this.name = name;
    }

    public abstract void add(IComponent component);

    public abstract void remove(IComponent component);

}
