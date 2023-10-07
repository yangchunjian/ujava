package cn.ujava.design.observer;

public class Display implements Observer {
    private float temperature;
    private float humidity;
    private float pressure;
    private String name;

    @Override
    public String name() {
        return this.name;
    }

    public Display(String name) {
        this.name = name;
    }

    public void update(float temperature, float humidity, float pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        display();
    }

    public void display() {
        System.out.println("Temperature: " + temperature);
        System.out.println("Humidity: " + humidity);
        System.out.println("Pressure: " + pressure);
    }
}

