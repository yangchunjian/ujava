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

package cn.ujava.common.cache.impl;

import cn.ujava.common.cache.CacheListener;
import cn.ujava.common.lang.Opt;
import cn.ujava.common.lang.mutable.Mutable;
import cn.ujava.common.map.WeakConcurrentMap;

import java.lang.ref.Reference;

/**
 * 弱引用缓存<br>
 * 对于一个给定的键，其映射的存在并不阻止垃圾回收器对该键的丢弃，这就使该键成为可终止的，被终止，然后被回收。<br>
 * 丢弃某个键时，其条目从映射中有效地移除。<br>
 *
 * @author ujava
 *
 * @param <K> 键
 * @param <V> 值
 * @author ujava
 * @since 3.0.7
 */
public class WeakCache<K, V> extends TimedCache<K, V>{
	private static final long serialVersionUID = 1L;

	/**
	 * 构造
	 * @param timeout 超时时常，单位毫秒，-1或0表示无限制
	 */
	public WeakCache(final long timeout) {
		super(timeout, new WeakConcurrentMap<>());
	}

	@Override
	public WeakCache<K, V> setListener(final CacheListener<K, V> listener) {
		super.setListener(listener);

		final WeakConcurrentMap<Mutable<K>, CacheObj<K, V>> map = (WeakConcurrentMap<Mutable<K>, CacheObj<K, V>>) this.cacheMap;
		// WeakKey回收之后，key对应的值已经是null了，因此此处的key也为null
		map.setPurgeListener((key, value)-> listener.onRemove(Opt.ofNullable(key).map(Reference::get).map(Mutable::get).get(), value.getValue()));

		return this;
	}
}
