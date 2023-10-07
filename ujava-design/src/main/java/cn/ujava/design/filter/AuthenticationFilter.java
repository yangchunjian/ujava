package cn.ujava.design.filter;

public class AuthenticationFilter implements Filter {
    public void doFilter(String request) {
        System.out.println("Authenticating request: " + request);
    }
}
