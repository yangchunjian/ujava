package cn.ujava.design.command;

public class CreateFileCommand implements Command {
    public void execute(String[] args) {
        // 根据给定的名称和内容创建文件的代码
        System.out.println("创建文件 : " + String.join(", ", args));
    }
}
