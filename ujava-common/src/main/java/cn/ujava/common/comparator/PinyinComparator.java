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

package cn.ujava.common.comparator;

import java.util.Locale;

/**
 * 按照GBK拼音顺序对给定的汉字字符串排序
 *
 * @author ujava
 * @since 4.0.8
 */
public class PinyinComparator extends LocaleComparator {
	private static final long serialVersionUID = 1L;

	/**
	 * 构造，{@code null}最大，排在最后
	 */
	public PinyinComparator() {
		this(true);
	}

	/**
	 * 构造
	 *
	 * @param nullGreater 是否{@code null}最大，排在最后
	 */
	public PinyinComparator(final boolean nullGreater) {
		super(nullGreater, Locale.CHINESE);
	}
}
