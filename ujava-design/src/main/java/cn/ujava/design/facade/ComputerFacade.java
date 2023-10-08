package cn.ujava.design.facade;

public class ComputerFacade {
    private CPU cpu;
    private Memory memory;
    private HardDrive hardDrive;
    public ComputerFacade() {
        cpu = new CPU();
        memory = new Memory();
        hardDrive = new HardDrive();
    }
    public void start() {
        System.out.println("启动计算机...");
        cpu.processData();
        memory.load();
        hardDrive.readData();
        System.out.println("计算机启动完毕！");
    }
}

