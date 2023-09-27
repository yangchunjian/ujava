package cn.ujava.design.command;

import java.util.HashMap;
import java.util.Map;

public class CommandExecutor {
    private Map<String, Command> commands = new HashMap<>();

    public CommandExecutor() {
        // 将具体命令与命令名称关联起来
        commands.put("create", new CreateFileCommand());
        commands.put("delete", new DeleteFileCommand());
    }

    public void executeCommand(String commandName, String[] args) {
        // 查找对应的命令并执行
        Command command = commands.get(commandName);
        if (command != null) {
            command.execute(args);
        } else {
            System.out.println("Unknown command: " + commandName);
        }
    }
}

