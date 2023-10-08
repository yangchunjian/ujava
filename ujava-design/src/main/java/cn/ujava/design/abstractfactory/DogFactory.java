package cn.ujava.design.abstractfactory;

public class DogFactory  extends AnimalFactory {
    @Override
    public Animal createAnimal() {
        return new Dog();
    }
}