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

import cn.ujava.common.date.DateUtil;

import java.io.Serializable;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;

/**
 * 缓存对象
 *
 * @param <K> Key类型
 * @param <V> Value类型
 * @author ujava
 */
public class CacheObj<K, V> implements Serializable {
	private static final long serialVersionUID = 1L;

	protected final K key;
	protected final V obj;

	/**
	 * 上次访问时间
	 */
	protected volatile long lastAccess;
	/**
	 * 访问次数
	 */
	protected AtomicLong accessCount = new AtomicLong();
	/**
	 * 对象存活时长，0表示永久存活
	 */
	protected final long ttl;

	/**
	 * 构造
	 *
	 * @param key 键
	 * @param obj 值
	 * @param ttl 超时时长
	 */
	protected CacheObj(final K key, final V obj, final long ttl) {
		this.key = key;
		this.obj = obj;
		this.ttl = ttl;
		this.lastAccess = System.currentTimeMillis();
	}

	/**
	 * 获取键
	 *
	 * @return 键
	 * @since 4.0.10
	 */
	public K getKey() {
		return this.key;
	}

	/**
	 * 获取值
	 *
	 * @return 值
	 * @since 4.0.10
	 */
	public V getValue() {
		return this.obj;
	}

	/**
	 * 获取对象存活时长，即超时总时长，0表示无限
	 *
	 * @return 对象存活时长
	 * @since 5.7.17
	 */
	public long getTtl() {
		return this.ttl;
	}

	/**
	 * 获取过期时间，返回{@code null}表示永不过期
	 *
	 * @return 此对象的过期时间，返回{@code null}表示永不过期
	 * @since 5.7.17
	 */
	public Date getExpiredTime(){
		if(this.ttl > 0){
			return DateUtil.date(this.lastAccess + this.ttl);
		}
		return null;
	}

	/**
	 * 获取上次访问时间
	 *
	 * @return 上次访问时间
	 * @since 5.7.17
	 */
	public long getLastAccess() {
		return this.lastAccess;
	}

	@Override
	public String toString() {
		return "CacheObj [key=" + key + ", obj=" + obj + ", lastAccess=" + lastAccess + ", accessCount=" + accessCount + ", ttl=" + ttl + "]";
	}

	/**
	 * 判断是否过期
	 *
	 * @return 是否过期
	 */
	protected boolean isExpired() {
		if (this.ttl > 0) {
			// 此处不考虑时间回拨
			return (System.currentTimeMillis() - this.lastAccess) > this.ttl;
		}
		return false;
	}

	/**
	 * 获取值
	 *
	 * @param isUpdateLastAccess 是否更新最后访问时间
	 * @return 获得对象
	 * @since 4.0.10
	 */
	protected V get(final boolean isUpdateLastAccess) {
		if (isUpdateLastAccess) {
			lastAccess = System.currentTimeMillis();
		}
		accessCount.getAndIncrement();
		return this.obj;
	}
}
