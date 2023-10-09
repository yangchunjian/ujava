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

package cn.ujava.common.convert.impl;

import cn.ujava.common.convert.AbstractConverter;
import cn.ujava.common.convert.ConvertException;
import cn.ujava.common.date.DateTime;
import cn.ujava.common.date.DateUtil;
import cn.ujava.common.date.SqlDateUtil;
import cn.ujava.common.text.StrUtil;

import java.time.temporal.TemporalAccessor;
import java.util.Calendar;

/**
 * 日期转换器
 *
 * @author ujava
 */
public class DateConverter extends AbstractConverter {
	private static final long serialVersionUID = 1L;

	/**
	 * 单例
	 */
	public static final DateConverter INSTANCE = new DateConverter();

	/**
	 * 日期格式化
	 */
	private String format;

	/**
	 * 构造
	 */
	public DateConverter() {
		this(null);
	}

	/**
	 * 构造
	 *
	 * @param format 日期格式
	 */
	public DateConverter(final String format) {
		this.format = format;
	}

	/**
	 * 获取日期格式
	 *
	 * @return 设置日期格式
	 */
	public String getFormat() {
		return format;
	}

	/**
	 * 设置日期格式
	 *
	 * @param format 日期格式
	 */
	public void setFormat(final String format) {
		this.format = format;
	}

	@Override
	protected java.util.Date convertInternal(final Class<?> targetClass, final Object value) {
		if (value == null || (value instanceof CharSequence && StrUtil.isBlank(value.toString()))) {
			return null;
		}
		if (value instanceof TemporalAccessor) {
			return wrap(targetClass, DateUtil.date((TemporalAccessor) value));
		} else if (value instanceof Calendar) {
			return wrap(targetClass, DateUtil.date((Calendar) value));
		} else if (null == this.format && value instanceof Number) {
			return wrap(targetClass, ((Number) value).longValue());
		} else {
			// 统一按照字符串处理
			final String valueStr = convertToStr(value);
			final DateTime dateTime = StrUtil.isBlank(this.format) //
				? DateUtil.parse(valueStr) //
				: DateUtil.parse(valueStr, this.format);
			if (null != dateTime) {
				return wrap(targetClass, dateTime);
			}
		}

		throw new ConvertException("Can not convert {}:[{}] to {}", value.getClass().getName(), value, targetClass.getName());
	}

	/**
	 * java.util.Date转为子类型
	 *
	 * @param date Date
	 * @return 目标类型对象
	 */
	private java.util.Date wrap(final Class<?> targetClass, final DateTime date) {
		// 返回指定类型
		if (java.util.Date.class == targetClass) {
			return date.toJdkDate();
		}
		if (DateTime.class == targetClass) {
			return date;
		}

		return wrap(targetClass, date.getTime());
	}

	/**
	 * 时间戳转为子类型，支持：
	 * <ul>
	 *     <li>{@link java.util.Date}</li>
	 *     <li>{@link DateTime}</li>
	 *     <li>{@link java.sql.Date}</li>
	 *     <li>{@link java.sql.Time}</li>
	 *     <li>{@link java.sql.Timestamp}</li>
	 * </ul>
	 *
	 * @param mills Date
	 * @return 目标类型对象
	 */
	private java.util.Date wrap(final Class<?> targetClass, final long mills) {
		// 返回指定类型
		if (java.util.Date.class == targetClass) {
			return new java.util.Date(mills);
		}
		if (DateTime.class == targetClass) {
			return DateUtil.date(mills);
		}

		return SqlDateUtil.wrap(targetClass, mills);
	}
}
