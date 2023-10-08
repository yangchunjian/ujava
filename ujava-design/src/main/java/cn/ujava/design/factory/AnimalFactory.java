package cn.ujava.design.factory;

public class AnimalFactory {
    // 定义一个静态方法，根据传入的参数创建具体的产品类对象
    public static Animal createAnimal(String type) {
        if (type.equalsIgnoreCase("dog")) {
            return new Dog();
        } else if (type.equalsIgnoreCase("cat")) {
            return new Cat();
        } else {
            throw new IllegalArgumentException("Invalid animal type: " + type);
        }
    }
}

