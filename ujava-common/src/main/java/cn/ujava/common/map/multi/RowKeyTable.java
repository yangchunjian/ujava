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

package cn.ujava.common.map.multi;

import cn.ujava.common.collection.iter.ComputeIter;
import cn.ujava.common.collection.iter.IterUtil;
import cn.ujava.common.collection.iter.TransIter;
import cn.ujava.common.lang.builder.Builder;
import cn.ujava.common.map.AbsEntry;
import cn.ujava.common.map.MapUtil;

import java.util.*;

/**
 * 将行的键作为主键的{@link Table}实现<br>
 * 此结构为: 行=(列=值)
 *
 * @param <R> 行类型
 * @param <C> 列类型
 * @param <V> 值类型
 * @author Guava, ujava
 * @since 5.7.23
 */
public class RowKeyTable<R, C, V> extends AbsTable<R, C, V> {

	final Map<R, Map<C, V>> raw;
	/**
	 * 列的Map创建器，用于定义Table中Value对应Map类型
	 */
	final Builder<? extends Map<C, V>> columnBuilder;

	//region 构造

	/**
	 * 构造
	 */
	public RowKeyTable() {
		this(new HashMap<>());
	}

	/**
	 * 构造
	 *
	 * @param isLinked 是否有序，有序则使用{@link java.util.LinkedHashMap}作为原始Map
	 * @since 5.8.0
	 */
	public RowKeyTable(final boolean isLinked) {
		this(MapUtil.newHashMap(isLinked), () -> MapUtil.newHashMap(isLinked));
	}

	/**
	 * 构造
	 *
	 * @param raw 原始Map
	 */
	public RowKeyTable(final Map<R, Map<C, V>> raw) {
		this(raw, HashMap::new);
	}

	/**
	 * 构造
	 *
	 * @param raw              原始Map
	 * @param columnMapBuilder 列的map创建器
	 */
	public RowKeyTable(final Map<R, Map<C, V>> raw, final Builder<? extends Map<C, V>> columnMapBuilder) {
		this.raw = raw;
		this.columnBuilder = null == columnMapBuilder ? HashMap::new : columnMapBuilder;
	}
	//endregion

	@Override
	public Map<R, Map<C, V>> rowMap() {
		return raw;
	}

	@Override
	public V put(final R rowKey, final C columnKey, final V value) {
		return raw.computeIfAbsent(rowKey, (key) -> columnBuilder.build()).put(columnKey, value);
	}

	@Override
	public V remove(final R rowKey, final C columnKey) {
		final Map<C, V> map = getRow(rowKey);
		if (null == map) {
			return null;
		}
		final V value = map.remove(columnKey);
		if (map.isEmpty()) {
			raw.remove(rowKey);
		}
		return value;
	}

	@Override
	public boolean isEmpty() {
		return raw.isEmpty();
	}

	@Override
	public void clear() {
		this.raw.clear();
	}

	@Override
	public boolean containsColumn(final C columnKey) {
		if (columnKey == null) {
			return false;
		}
		for (final Map<C, V> map : raw.values()) {
			if (null != map && map.containsKey(columnKey)) {
				return true;
			}
		}
		return false;
	}

	//region columnMap
	@Override
	public Map<C, Map<R, V>> columnMap() {
		final Map<C, Map<R, V>> result = columnMap;
		return (result == null) ? columnMap = new ColumnMap() : result;
	}

	private Map<C, Map<R, V>> columnMap;

	private class ColumnMap extends AbstractMap<C, Map<R, V>> {
		@Override
		public Set<Entry<C, Map<R, V>>> entrySet() {
			return new ColumnMapEntrySet();
		}
	}

	private class ColumnMapEntrySet extends AbstractSet<Map.Entry<C, Map<R, V>>> {
		private final Set<C> columnKeySet = columnKeySet();

		@Override
		public Iterator<Map.Entry<C, Map<R, V>>> iterator() {
			return new TransIter<>(columnKeySet.iterator(),
					c -> MapUtil.entry(c, getColumn(c)));
		}

		@Override
		public int size() {
			return columnKeySet.size();
		}
	}
	//endregion


	//region columnKeySet
	@Override
	public Set<C> columnKeySet() {
		final Set<C> result = columnKeySet;
		return (result == null) ? columnKeySet = new ColumnKeySet() : result;
	}

	private Set<C> columnKeySet;

	private class ColumnKeySet extends AbstractSet<C> {

		@Override
		public Iterator<C> iterator() {
			return new ColumnKeyIterator();
		}

		@Override
		public int size() {
			return IterUtil.size(iterator());
		}
	}

	private class ColumnKeyIterator extends ComputeIter<C> {
		final Map<C, V> seen = columnBuilder.build();
		final Iterator<Map<C, V>> mapIterator = raw.values().iterator();
		Iterator<Map.Entry<C, V>> entryIterator = IterUtil.empty();

		@Override
		protected C computeNext() {
			while (true) {
				if (entryIterator.hasNext()) {
					final Map.Entry<C, V> entry = entryIterator.next();
					if (!seen.containsKey(entry.getKey())) {
						seen.put(entry.getKey(), entry.getValue());
						return entry.getKey();
					}
				} else if (mapIterator.hasNext()) {
					entryIterator = mapIterator.next().entrySet().iterator();
				} else {
					return null;
				}
			}
		}
	}
	//endregion

	//region getColumn
	@Override
	public List<C> columnKeys() {
		final Collection<Map<C, V>> values = this.raw.values();
		final List<C> result = new ArrayList<>(values.size() * 16);
		for (final Map<C, V> map : values) {
			map.forEach((key, value)-> result.add(key));
		}
		return result;
	}

	@Override
	public Map<R, V> getColumn(final C columnKey) {
		return new Column(columnKey);
	}

	private class Column extends AbstractMap<R, V> {
		final C columnKey;

		Column(final C columnKey) {
			this.columnKey = columnKey;
		}

		@Override
		public Set<Entry<R, V>> entrySet() {
			return new EntrySet();
		}

		private class EntrySet extends AbstractSet<Entry<R, V>> {

			@Override
			public Iterator<Entry<R, V>> iterator() {
				return new EntrySetIterator();
			}

			@Override
			public int size() {
				int size = 0;
				for (final Map<C, V> map : raw.values()) {
					if (map.containsKey(columnKey)) {
						size++;
					}
				}
				return size;
			}
		}

		private class EntrySetIterator extends ComputeIter<Entry<R, V>> {
			final Iterator<Entry<R, Map<C, V>>> iterator = raw.entrySet().iterator();

			@Override
			protected Entry<R, V> computeNext() {
				while (iterator.hasNext()) {
					final Entry<R, Map<C, V>> entry = iterator.next();
					if (entry.getValue().containsKey(columnKey)) {
						return new AbsEntry<R, V>() {
							@Override
							public R getKey() {
								return entry.getKey();
							}

							@Override
							public V getValue() {
								return entry.getValue().get(columnKey);
							}

							@Override
							public V setValue(final V value) {
								return entry.getValue().put(columnKey, value);
							}
						};
					}
				}
				return null;
			}
		}
	}
	//endregion
}
