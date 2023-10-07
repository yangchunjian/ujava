package cn.ujava.design.composite;

import java.util.ArrayList;
import java.util.List;

public class Composite extends Component {
    private List<IComponent> children = new ArrayList<>();

    public Composite(String name) {
        super(name);
    }

    @Override
    public void add(IComponent component) {
        children.add(component);
    }

    @Override
    public void remove(IComponent component) {
        children.remove(component);
    }

    @Override
    public void display() {
        System.out.println("Composite: " + name);
        for (IComponent component : children) {
            component.display();
        }
    }
}
