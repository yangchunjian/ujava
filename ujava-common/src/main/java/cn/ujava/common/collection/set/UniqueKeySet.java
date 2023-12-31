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

package cn.ujava.common.collection.set;

import cn.ujava.common.map.MapBuilder;
import cn.ujava.common.util.ObjUtil;

import java.io.Serializable;
import java.util.*;
import java.util.function.Function;

/**
 * 唯一键的Set<br>
 * 通过自定义唯一键，通过{@link #uniqueGenerator}生成节点对象对应的键作为Map的key，确定唯一<br>
 * 此Set与HashSet不同的是，HashSet依赖于{@link Object#equals(Object)}确定唯一<br>
 * 但是很多时候我们无法对对象进行修改，此时在外部定义一个唯一规则，即可完成去重。
 * <pre>
 * {@code Set<UniqueTestBean> set = new UniqueKeySet<>(UniqueTestBean::getId);}
 * </pre>
 *
 * @param <K> 唯一键类型
 * @param <V> 值对象
 * @author ujava
 * @since 5.7.23
 */
public class UniqueKeySet<K, V> extends AbstractSet<V> implements Serializable {
	private static final long serialVersionUID = 1L;

	private Map<K, V> map;
	private final Function<V, K> uniqueGenerator;

	//region 构造

	/**
	 * 构造
	 *
	 * @param uniqueGenerator 唯一键生成规则函数，用于生成对象对应的唯一键
	 */
	public UniqueKeySet(final Function<V, K> uniqueGenerator) {
		this(false, uniqueGenerator);
	}

	/**
	 * 构造
	 *
	 * @param uniqueGenerator 唯一键生成规则函数，用于生成对象对应的唯一键
	 * @param c 初始化加入的集合
	 * @since 5.8.0
	 */
	public UniqueKeySet(final Function<V, K> uniqueGenerator, final Collection<? extends V> c) {
		this(false, uniqueGenerator, c);
	}

	/**
	 * 构造
	 *
	 * @param isLinked        是否保持加入顺序
	 * @param uniqueGenerator 唯一键生成规则函数，用于生成对象对应的唯一键
	 */
	public UniqueKeySet(final boolean isLinked, final Function<V, K> uniqueGenerator) {
		this(MapBuilder.of(isLinked), uniqueGenerator);
	}

	/**
	 * 构造
	 *
	 * @param isLinked        是否保持加入顺序
	 * @param uniqueGenerator 唯一键生成规则函数，用于生成对象对应的唯一键
	 * @param c 初始化加入的集合
	 * @since 5.8.0
	 */
	public UniqueKeySet(final boolean isLinked, final Function<V, K> uniqueGenerator, final Collection<? extends V> c) {
		this(isLinked, uniqueGenerator);
		addAll(c);
	}

	/**
	 * 构造
	 *
	 * @param initialCapacity 初始容量
	 * @param loadFactor      增长因子
	 * @param uniqueGenerator 唯一键生成规则函数，用于生成对象对应的唯一键
	 */
	public UniqueKeySet(final int initialCapacity, final float loadFactor, final Function<V, K> uniqueGenerator) {
		this(MapBuilder.of(new HashMap<>(initialCapacity, loadFactor)), uniqueGenerator);
	}

	/**
	 * 构造
	 *
	 * @param builder         初始Map，定义了Map类型
	 * @param uniqueGenerator 唯一键生成规则函数，用于生成对象对应的唯一键
	 */
	public UniqueKeySet(final MapBuilder<K, V> builder, final Function<V, K> uniqueGenerator) {
		this.map = builder.build();
		this.uniqueGenerator = uniqueGenerator;
	}

	//endregion

	@Override
	public Iterator<V> iterator() {
		return map.values().iterator();
	}

	@Override
	public int size() {
		return map.size();
	}

	@Override
	public boolean isEmpty() {
		return map.isEmpty();
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean contains(final Object o) {
		return map.containsKey(this.uniqueGenerator.apply((V) o));
	}

	@Override
	public boolean add(final V v) {
		return null == map.put(this.uniqueGenerator.apply(v), v);
	}

	/**
	 * 加入值，如果值已经存在，则忽略之
	 *
	 * @param v 值
	 * @return 是否成功加入
	 */
	public boolean addIfAbsent(final V v) {
		return null == map.putIfAbsent(this.uniqueGenerator.apply(v), v);
	}

	/**
	 * 加入集合中所有的值，如果值已经存在，则忽略之
	 *
	 * @param c 集合
	 * @return 是否有一个或多个被加入成功
	 */
	public boolean addAllIfAbsent(final Collection<? extends V> c) {
		boolean modified = false;
		for (final V v : c)
			if (addIfAbsent(v)) {
				modified = true;
			}
		return modified;
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean remove(final Object o) {
		return null != map.remove(this.uniqueGenerator.apply((V) o));
	}

	@Override
	public void clear() {
		map.clear();
	}

	@Override
	@SuppressWarnings("unchecked")
	public UniqueKeySet<K, V> clone() {
		try {
			final UniqueKeySet<K, V> newSet = (UniqueKeySet<K, V>) super.clone();
			newSet.map = ObjUtil.clone(this.map);
			return newSet;
		} catch (final CloneNotSupportedException e) {
			throw new InternalError(e);
		}
	}

}
