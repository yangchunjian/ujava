package cn.ujava.design.command;

public class DeleteFileCommand implements Command {
    public void execute(String[] args) {
        // 根据给定的名称删除文件的代码
        System.out.println("删除文件 : "+String.join(",",args) );
    }
}
