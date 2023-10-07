package cn.ujava.design.memento;

public class Originator {
    private String state;
    public void setState(String state) {
        this.state = state;
    }
    public String getState() {
        return state;
    }
    // createMemento()方法创建备忘录对象，并将当前状态保存到备忘录对象中。
    public Memento createMemento() {
        return new Memento(state);
    }
    // restore()方法用于从备忘录对象中恢复先前的状态。
    public void restore(Memento memento) {
        state = memento.getState();
    }
}

