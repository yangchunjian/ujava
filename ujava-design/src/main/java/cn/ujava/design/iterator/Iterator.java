package cn.ujava.design.iterator;

public interface Iterator<T> {
    boolean hasNext();
    T next();
}