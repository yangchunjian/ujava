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

package cn.ujava.common.lang.range;

import cn.ujava.common.convert.Convert;
import cn.ujava.common.lang.Assert;
import cn.ujava.common.math.NumberUtil;

import java.lang.reflect.Type;

/**
 * 片段表示，用于表示文本、集合等数据结构的一个区间。
 * @param <T> 数字类型，用于表示位置index
 *
 * @author ujava
 * @since 5.5.3
 */
public interface Segment<T extends Number> {

	/**
	 * 获取起始位置
	 *
	 * @return 起始位置
	 */
	T getBeginIndex();

	/**
	 * 获取结束位置
	 *
	 * @return 结束位置
	 */
	T getEndIndex();

	/**
	 * 片段长度，默认计算方法为abs({@link #getEndIndex()} - {@link #getEndIndex()})
	 *
	 * @return 片段长度
	 */
	default T length(){
		final T start = Assert.notNull(getBeginIndex(), "Start index must be not null!");
		final T end = Assert.notNull(getEndIndex(), "End index must be not null!");
		return Convert.convert((Type) start.getClass(), NumberUtil.sub(end, start).abs());
	}
}
