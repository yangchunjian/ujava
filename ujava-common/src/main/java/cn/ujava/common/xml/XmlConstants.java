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

package cn.ujava.common.xml;

import java.util.regex.Pattern;

/**
 * XML相关常量
 *
 * @author ujava
 * @since 6.0.0
 */
public class XmlConstants {
	/**
	 * 字符串常量：XML 不间断空格转义 {@code "&nbsp;" -> " "}
	 */
	public static final String NBSP = "&nbsp;";

	/**
	 * 字符串常量：XML And 符转义 {@code "&amp;" -> "&"}
	 */
	public static final String AMP = "&amp;";

	/**
	 * 字符串常量：XML 双引号转义 {@code "&quot;" -> "\""}
	 */
	public static final String QUOTE = "&quot;";

	/**
	 * 字符串常量：XML 单引号转义 {@code "&apos" -> "'"}
	 */
	public static final String APOS = "&apos;";

	/**
	 * 字符串常量：XML 小于号转义 {@code "&lt;" -> "<"}
	 */
	public static final String LT = "&lt;";

	/**
	 * 字符串常量：XML 大于号转义 {@code "&gt;" -> ">"}
	 */
	public static final String GT = "&gt;";

	/**
	 * 在XML中无效的字符 正则
	 */
	public static final Pattern INVALID_PATTERN = Pattern.compile("[\\x00-\\x08\\x0b-\\x0c\\x0e-\\x1f]");
	/**
	 * 在XML中注释的内容 正则
	 */
	public static final Pattern COMMENT_PATTERN = Pattern.compile("(?s)<!--.+?-->");
	/**
	 * XML格式化输出默认缩进量
	 */
	public static final int INDENT_DEFAULT = 2;
}
