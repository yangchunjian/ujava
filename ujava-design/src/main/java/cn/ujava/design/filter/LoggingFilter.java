package cn.ujava.design.filter;

public class LoggingFilter  implements Filter {
    public void doFilter(String request) {
        System.out.println("Logging request: " + request);
    }
}
