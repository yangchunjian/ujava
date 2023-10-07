package cn.ujava.design.state;

public class Context {
    private State state;
    public void setState(State state) {
        this.state = state;
    }
    public void request() {
        state.handle();
    }
}

