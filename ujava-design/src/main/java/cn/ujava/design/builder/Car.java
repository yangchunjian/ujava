package cn.ujava.design.builder;

import lombok.Data;

public class Car {
    private String make;
    private String model;
    private int year;
    private String engine;
    private int seats;
    public Car(String make, String model, int year, String engine, int seats) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.seats = seats;
    }
    // ... getter setter ... //
}
