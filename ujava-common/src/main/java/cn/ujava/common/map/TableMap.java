/*
 * Copyright (c) 2023 ujava
 * Hutool is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          https://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

package cn.ujava.common.map;

import cn.ujava.common.collection.CollUtil;
import cn.ujava.common.collection.ListUtil;
import cn.ujava.common.util.ObjUtil;

import java.io.Serializable;
import java.util.*;
import java.util.function.BiConsumer;
import java.util.function.BiFunction;

/**
 * 可重复键和值的Map<br>
 * 通过键值单独建立List方式，使键值对一一对应，实现正向和反向两种查找<br>
 * 无论是正向还是反向，都是遍历列表查找过程，相比标准的HashMap要慢，数据越多越慢
 *
 * @param <K> 键类型
 * @param <V> 值类型
 * @author ujava
 */
public class TableMap<K, V> implements Map<K, V>, Iterable<Map.Entry<K, V>>, Serializable {
	private static final long serialVersionUID = 1L;

	private static final int DEFAULT_CAPACITY = 10;

	private final List<K> keys;
	private final List<V> values;

	/**
	 * 构造
	 */
	public TableMap() {
		this(DEFAULT_CAPACITY);
	}

	/**
	 * 构造
	 *
	 * @param size 初始容量
	 */
	public TableMap(final int size) {
		this.keys = new ArrayList<>(size);
		this.values = new ArrayList<>(size);
	}

	/**
	 * 构造
	 *
	 * @param keys   键列表
	 * @param values 值列表
	 */
	public TableMap(final K[] keys, final V[] values) {
		this.keys = ListUtil.of(keys);
		this.values = ListUtil.of(values);
	}

	@Override
	public int size() {
		return keys.size();
	}

	@Override
	public boolean isEmpty() {
		return CollUtil.isEmpty(keys);
	}

	@Override
	public boolean containsKey(final Object key) {
		//noinspection SuspiciousMethodCalls
		return keys.contains(key);
	}

	@Override
	public boolean containsValue(final Object value) {
		//noinspection SuspiciousMethodCalls
		return values.contains(value);
	}

	@Override
	public V get(final Object key) {
		//noinspection SuspiciousMethodCalls
		final int index = keys.indexOf(key);
		if (index > -1) {
			return values.get(index);
		}
		return null;
	}

	/**
	 * 根据value获得对应的key，只返回找到的第一个value对应的key值
	 *
	 * @param value 值
	 * @return 键
	 * @since 5.3.3
	 */
	public K getKey(final V value) {
		final int index = values.indexOf(value);
		if (index > -1) {
			return keys.get(index);
		}
		return null;
	}

	/**
	 * 获取指定key对应的所有值
	 *
	 * @param key 键
	 * @return 值列表
	 * @since 5.2.5
	 */
	public List<V> getValues(final K key) {
		return CollUtil.getAny(
			this.values,
			CollUtil.indexOfAll(this.keys, (ele) -> ObjUtil.equals(ele, key))
		);
	}

	/**
	 * 获取指定value对应的所有key
	 *
	 * @param value 值
	 * @return 值列表
	 * @since 5.2.5
	 */
	public List<K> getKeys(final V value) {
		return CollUtil.getAny(
			this.keys,
			CollUtil.indexOfAll(this.values, (ele) -> ObjUtil.equals(ele, value))
		);
	}

	@Override
	public V put(final K key, final V value) {
		keys.add(key);
		values.add(value);
		return null;
	}

	/**
	 * 移除指定的所有键和对应的所有值
	 *
	 * @param key 键
	 * @return 最后一个移除的值
	 */
	@Override
	public V remove(final Object key) {
		V lastValue = null;
		int index;
		//noinspection SuspiciousMethodCalls
		while ((index = keys.indexOf(key)) > -1) {
			lastValue = removeByIndex(index);
		}
		return lastValue;
	}

	/**
	 * 移除指定位置的键值对
	 *
	 * @param index 位置，不能越界
	 * @return 移除的值
	 */
	public V removeByIndex(final int index) {
		keys.remove(index);
		return values.remove(index);
	}

	@Override
	public void putAll(final Map<? extends K, ? extends V> m) {
		for (final Entry<? extends K, ? extends V> entry : m.entrySet()) {
			this.put(entry.getKey(), entry.getValue());
		}
	}

	@Override
	public void clear() {
		keys.clear();
		values.clear();
	}

	@Override
	public Set<K> keySet() {
		return new HashSet<>(this.keys);
	}

	/**
	 * 获取所有键，可重复，不可修改
	 *
	 * @return 键列表
	 * @since 5.8.0
	 */
	public List<K> keys() {
		return Collections.unmodifiableList(this.keys);
	}

	@Override
	public Collection<V> values() {
		return Collections.unmodifiableList(this.values);
	}

	@Override
	public Set<Entry<K, V>> entrySet() {
		final Set<Entry<K, V>> hashSet = new LinkedHashSet<>();
		for (int i = 0; i < size(); i++) {
			hashSet.add(MapUtil.entry(keys.get(i), values.get(i)));
		}
		return hashSet;
	}

	@Override
	public Iterator<Entry<K, V>> iterator() {
		return new Iterator<Entry<K, V>>() {
			private final Iterator<K> keysIter = keys.iterator();
			private final Iterator<V> valuesIter = values.iterator();

			@Override
			public boolean hasNext() {
				return keysIter.hasNext() && valuesIter.hasNext();
			}

			@Override
			public Entry<K, V> next() {
				return MapUtil.entry(keysIter.next(), valuesIter.next());
			}

			@Override
			public void remove() {
				keysIter.remove();
				valuesIter.remove();
			}
		};
	}

	@Override
	public String toString() {
		return "TableMap{" +
			"keys=" + keys +
			", values=" + values +
			'}';
	}

	@Override
	public void forEach(final BiConsumer<? super K, ? super V> action) {
		for (int i = 0; i < size(); i++) {
			action.accept(keys.get(i), values.get(i));
		}
	}

	@Override
	public boolean remove(final Object key, final Object value) {
		boolean removed = false;
		for (int i = 0; i < size(); i++) {
			if (ObjUtil.equals(key, keys.get(i)) && ObjUtil.equals(value, values.get(i))) {
				removeByIndex(i);
				removed = true;
				// 移除当前元素，下个元素前移
				i--;
			}
		}
		return removed;
	}

	@Override
	public void replaceAll(final BiFunction<? super K, ? super V, ? extends V> function) {
		for (int i = 0; i < size(); i++) {
			final V newValue = function.apply(keys.get(i), values.get(i));
			values.set(i, newValue);
		}
	}

	@Override
	public boolean replace(final K key, final V oldValue, final V newValue) {
		for (int i = 0; i < size(); i++) {
			if (ObjUtil.equals(key, keys.get(i)) && ObjUtil.equals(oldValue, values.get(i))) {
				values.set(i, newValue);
				return true;
			}
		}
		return false;
	}

	/**
	 * 替换指定key的所有值为指定值
	 *
	 * @param key   指定的key
	 * @param value 替换的值
	 * @return 最后替换的值
	 */
	@Override
	public V replace(final K key, final V value) {
		V lastValue = null;
		for (int i = 0; i < size(); i++) {
			if (ObjUtil.equals(key, keys.get(i))) {
				lastValue = values.set(i, value);
			}
		}
		return lastValue;
	}


	@SuppressWarnings("NullableProblems")
	@Override
	public V computeIfPresent(final K key, final BiFunction<? super K, ? super V, ? extends V> remappingFunction) {
		if (null == remappingFunction) {
			return null;
		}

		V lastValue = null;
		for (int i = 0; i < size(); i++) {
			if (ObjUtil.equals(key, keys.get(i))) {
				final V newValue = remappingFunction.apply(key, values.get(i));
				if (null != newValue) {
					lastValue = values.set(i, newValue);
				} else {
					removeByIndex(i);
					// 移除当前元素，下个元素前移
					i--;
				}
			}
		}
		return lastValue;
	}
}
