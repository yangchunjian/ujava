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

package cn.ujava.common.date.format.parser;

import cn.ujava.common.date.DatePattern;
import cn.ujava.common.date.DateTime;
import cn.ujava.common.date.format.DefaultDateBasic;

/**
 * CST日期字符串（JDK的Date对象toString默认格式）解析，支持格式类似于；
 * <pre>
 *   Tue Jun 4 16:25:15 +0800 2019
 *   Thu May 16 17:57:18 GMT+08:00 2019
 *   Wed Aug 01 00:00:00 CST 2012
 * </pre>
 *
 * @author ujava
 * @since 6.0.0
 */
public class CSTDateParser extends DefaultDateBasic implements DateParser {
	private static final long serialVersionUID = 1L;
	/**
	 * 单例对象
	 */
	public static CSTDateParser INSTANCE = new CSTDateParser();

	@Override
	public DateTime parse(final String source) {
		return new DateTime(source, DatePattern.JDK_DATETIME_FORMAT);
	}
}
