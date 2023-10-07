package cn.ujava.design.observer;


import org.junit.jupiter.api.BeforeEach;

class Test {


    @BeforeEach
    void setup() {

    }

    @org.junit.jupiter.api.Test
    void test() {

        WeatherStation weatherStation = new WeatherStation();
        Display display1 = new Display("01");
        Display display2 = new Display("02");
        weatherStation.registerObserver(display1);
        weatherStation.registerObserver(display2);
        weatherStation.setMeasurements(25.0f, 60.0f, 1013.0f);
        weatherStation.removeObserver(display2);
        weatherStation.setMeasurements(26.0f, 65.0f, 1012.0f);

    }
}
