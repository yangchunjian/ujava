package cn.ujava.design.filter;

import java.util.ArrayList;
import java.util.List;

public class FilterChain {
    private List<Filter> filters = new ArrayList<Filter>();
    private int index = 0;

    public void addFilter(Filter filter) {
        filters.add(filter);
    }

    public void doFilter(String request) {
        if (index == filters.size()) {
            return;
        }

        Filter filter = filters.get(index);
        index++;

        filter.doFilter(request);
        doFilter(request);
    }
}

