package cn.ujava.design.builder;


public class CarBuilder {
    private String make;
    private String model;
    private int year;
    private String engine;
    private int seats;

    public CarBuilder setMake(String make) {
        this.make = make;
        return this;
    }

    public CarBuilder setModel(String model) {
        this.model = model;
        return this;
    }

    public CarBuilder setYear(int year) {
        this.year = year;
        return this;
    }

    public CarBuilder setEngine(String engine) {
        this.engine = engine;
        return this;
    }

    public CarBuilder setSeats(int seats) {
        this.seats = seats;
        return this;
    }

    public Car build() {
        return new Car(make, model, year, engine, seats);
    }
}
