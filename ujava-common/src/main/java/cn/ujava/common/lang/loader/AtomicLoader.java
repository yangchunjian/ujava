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

package cn.ujava.common.lang.loader;

import java.io.Serializable;
import java.util.concurrent.atomic.AtomicReference;

/**
 * 原子引用加载器<br>
 * 使用{@link AtomicReference} 实懒加载，过程如下
 * <pre>
 * 1. 检查引用中是否有加载好的对象，有则返回
 * 2. 如果没有则初始化一个对象，并再次比较引用中是否有其它线程加载好的对象，无则加入，有则返回已有的
 * </pre>
 *
 * 当对象未被创建，对象的初始化操作在多线程情况下可能会被调用多次（多次创建对象），但是总是返回同一对象
 *
 * @author ujava
 *
 * @param <T> 被加载对象类型
 */
public abstract class AtomicLoader<T> implements Loader<T>, Serializable {
	private static final long serialVersionUID = 1L;

	/** 被加载对象的引用 */
	private final AtomicReference<T> reference = new AtomicReference<>();

	/**
	 * 获取一个对象，第一次调用此方法时初始化对象然后返回，之后调用此方法直接返回原对象
	 */
	@Override
	public T get() {
		T result = reference.get();

		if (result == null) {
			result = init();
			if (!reference.compareAndSet(null, result)) {
				// 其它线程已经创建好此对象
				result = reference.get();
			}
		}

		return result;
	}

	/**
	 * 初始化被加载的对象<br>
	 * 如果对象从未被加载过，调用此方法初始化加载对象，此方法只被调用一次
	 *
	 * @return 被加载的对象
	 */
	protected abstract T init();
}
