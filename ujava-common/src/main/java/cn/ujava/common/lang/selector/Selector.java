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

package cn.ujava.common.lang.selector;

/**
 * 选择器接口
 *
 * @param <T> 选择对象类型
 * @author ujava
 * @since 6.0.0
 */
public interface Selector<T> {

	/**
	 * 选择下一个对象
	 *
	 * @return 下一个对象
	 */
	T select();
}
