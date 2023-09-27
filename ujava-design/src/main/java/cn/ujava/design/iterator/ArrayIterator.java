package cn.ujava.design.iterator;

import java.util.NoSuchElementException;

public class ArrayIterator<T> implements Iterator<T> {
    private T[] array;
    private int currentIndex;

    public ArrayIterator(T[] array) {
        this.array = array;
        this.currentIndex = 0;
    }

    public boolean hasNext() {
        return currentIndex < array.length;
    }

    public T next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        T element = array[currentIndex];
        currentIndex++;
        return element;
    }
}

