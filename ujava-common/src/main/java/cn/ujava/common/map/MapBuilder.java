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


import cn.ujava.common.lang.builder.Builder;

import java.util.Map;
import java.util.function.Supplier;

/**
 * Map创建类
 *
 * @param <K> Key类型
 * @param <V> Value类型
 * @since 3.1.1
 */
public class MapBuilder<K, V> implements Builder<Map<K, V>> {
	private static final long serialVersionUID = 1L;

	private final Map<K, V> map;

	// region ----- of
	/**
	 * 创建Builder，默认HashMap实现
	 *
	 * @param <K>   Key类型
	 * @param <V>   Value类型
	 * @param key   键
	 * @param value 值
	 * @return MapBuilder
	 */
	public static <K, V> MapBuilder<K, V> of(final K key, final V value) {
		final MapBuilder<K, V> builder = of();
		return builder.put(key, value);
	}

	/**
	 * 创建Builder，默认HashMap实现
	 *
	 * @param <K> Key类型
	 * @param <V> Value类型
	 * @return MapBuilder
	 * @since 5.3.0
	 */
	public static <K, V> MapBuilder<K, V> of() {
		return of(false);
	}

	/**
	 * 创建Builder
	 *
	 * @param <K>      Key类型
	 * @param <V>      Value类型
	 * @param isLinked true创建LinkedHashMap，false创建HashMap
	 * @return MapBuilder
	 * @since 5.3.0
	 */
	public static <K, V> MapBuilder<K, V> of(final boolean isLinked) {
		return of(MapUtil.newHashMap(isLinked));
	}

	/**
	 * 创建Builder
	 *
	 * @param <K> Key类型
	 * @param <V> Value类型
	 * @param map Map实体类
	 * @return MapBuilder
	 * @since 3.2.3
	 */
	public static <K, V> MapBuilder<K, V> of(final Map<K, V> map) {
		return new MapBuilder<>(map);
	}
	// endregion

	/**
	 * 链式Map创建类
	 *
	 * @param map 要使用的Map实现类
	 */
	public MapBuilder(final Map<K, V> map) {
		this.map = map;
	}

	/**
	 * 链式Map创建
	 *
	 * @param k Key类型
	 * @param v Value类型
	 * @return 当前类
	 */
	public MapBuilder<K, V> put(final K k, final V v) {
		map.put(k, v);
		return this;
	}

	/**
	 * 链式Map创建
	 *
	 * @param condition put条件
	 * @param k         Key类型
	 * @param v         Value类型
	 * @return 当前类
	 * @since 5.7.5
	 */
	public MapBuilder<K, V> put(final boolean condition, final K k, final V v) {
		if (condition) {
			put(k, v);
		}
		return this;
	}

	/**
	 * 链式Map创建
	 *
	 * @param condition put条件
	 * @param k         Key类型
	 * @param supplier  Value类型结果提供方
	 * @return 当前类
	 * @since 5.7.5
	 */
	public MapBuilder<K, V> put(final boolean condition, final K k, final Supplier<V> supplier) {
		if (condition) {
			put(k, supplier.get());
		}
		return this;
	}

	/**
	 * 链式Map创建
	 *
	 * @param map 合并map
	 * @return 当前类
	 */
	public MapBuilder<K, V> putAll(final Map<K, V> map) {
		this.map.putAll(map);
		return this;
	}

	/**
	 * 清空Map
	 *
	 * @return this
	 * @since 5.7.23
	 */
	public MapBuilder<K, V> clear() {
		this.map.clear();
		return this;
	}

	/**
	 * 创建后的map
	 *
	 * @return 创建后的map
	 */
	public Map<K, V> map() {
		return map;
	}

	/**
	 * 创建后的map
	 *
	 * @return 创建后的map
	 * @since 3.3.0
	 */
	@Override
	public Map<K, V> build() {
		return map();
	}

	/**
	 * 将map转成字符串
	 *
	 * @param separator         entry之间的连接符
	 * @param keyValueSeparator kv之间的连接符
	 * @return 连接字符串
	 */
	public String join(final String separator, final String keyValueSeparator) {
		return MapUtil.join(this.map, separator, keyValueSeparator);
	}

	/**
	 * 将map转成字符串
	 *
	 * @param separator         entry之间的连接符
	 * @param keyValueSeparator kv之间的连接符
	 * @return 连接后的字符串
	 */
	public String joinIgnoreNull(final String separator, final String keyValueSeparator) {
		return MapUtil.joinIgnoreNull(this.map, separator, keyValueSeparator);
	}

	/**
	 * 将map转成字符串
	 *
	 * @param separator         entry之间的连接符
	 * @param keyValueSeparator kv之间的连接符
	 * @param isIgnoreNull      是否忽略null的键和值
	 * @return 连接后的字符串
	 */
	public String join(final String separator, final String keyValueSeparator, final boolean isIgnoreNull) {
		return MapUtil.join(this.map, separator, keyValueSeparator, isIgnoreNull);
	}

}
