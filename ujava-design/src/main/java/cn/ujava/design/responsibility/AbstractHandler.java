package cn.ujava.design.responsibility;


// 创建抽象处理器类
public abstract class AbstractHandler implements Handler {
    private Handler nextHandler;

    public Handler setNextHandler(Handler nextHandler) {
        this.nextHandler = nextHandler;
        return this.nextHandler;
    }

    public Handler getNextHandler() {
        return nextHandler;
    }
}

