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

import cn.ujava.common.bean.BeanUtil;
import cn.ujava.common.convert.CompositeConverter;
import cn.ujava.common.convert.ConvertException;
import cn.ujava.common.convert.Converter;
import cn.ujava.common.lang.tuple.Pair;
import cn.ujava.common.map.MapUtil;
import cn.ujava.common.reflect.TypeReference;
import cn.ujava.common.reflect.TypeUtil;
import cn.ujava.common.text.CharUtil;
import cn.ujava.common.text.StrUtil;

import java.lang.reflect.Type;
import java.util.Map;

/**
 * {@link Pair} 转换器，支持以下类型转为Pair
 * <ul>
 *     <li>{@link Map}</li>
 *     <li>{@link Map.Entry}</li>
 *     <li>带分隔符的字符串，支持分隔符{@code :}、{@code =}、{@code ,}</li>
 *     <li>Bean，包含{@code getLeft}和{@code getRight}方法</li>
 * </ul>
 *
 * @author ujava
 */
public class PairConverter implements Converter {

	/**
	 * 单例
	 */
	public static final PairConverter INSTANCE = new PairConverter();

	@Override
	public Object convert(Type targetType, final Object value) throws ConvertException {
		if (targetType instanceof TypeReference) {
			targetType = ((TypeReference<?>) targetType).getType();
		}
		final Type leftType = TypeUtil.getTypeArgument(targetType, 0);
		final Type rightType = TypeUtil.getTypeArgument(targetType, 1);

		return convert(leftType, rightType, value);
	}

	/**
	 * 转换对象为指定键值类型的指定类型Map
	 *
	 * @param leftType  键类型
	 * @param rightType 值类型
	 * @param value     被转换的值
	 * @return 转换后的Map
	 * @throws ConvertException 转换异常或不支持的类型
	 */
	@SuppressWarnings("rawtypes")
	public Pair<?, ?> convert(final Type leftType, final Type rightType, final Object value)
		throws ConvertException {
		Map map = null;
		if (value instanceof Map.Entry) {
			final Map.Entry entry = (Map.Entry) value;
			map = MapUtil.of(entry.getKey(), entry.getValue());
		} else if (value instanceof Pair) {
			final Pair entry = (Pair<?, ?>) value;
			map = MapUtil.of(entry.getLeft(), entry.getRight());
		} else if (value instanceof Map) {
			map = (Map) value;
		} else if (value instanceof CharSequence) {
			final CharSequence str = (CharSequence) value;
			map = strToMap(str);
		} else if (BeanUtil.isReadableBean(value.getClass())) {
			map = BeanUtil.beanToMap(value);
		}

		if (null != map) {
			return mapToPair(leftType, rightType, map);
		}

		throw new ConvertException("Unsupported to map from [{}] of type: {}", value, value.getClass().getName());
	}

	/**
	 * 字符串转单个键值对的Map，支持分隔符{@code :}、{@code =}、{@code ,}
	 *
	 * @param str 字符串
	 * @return map or null
	 */
	private static Map<CharSequence, CharSequence> strToMap(final CharSequence str) {
		// key:value  key=value  key,value
		final int index = StrUtil.indexOf(str,
			c -> c == CharUtil.COLON || c == CharUtil.EQUAL || c == CharUtil.COMMA,
			0, str.length());

		if (index > -1) {
			return MapUtil.of(str.subSequence(0, index), str.subSequence(index + 1, str.length()));
		}
		return null;
	}

	/**
	 * Map转Pair
	 *
	 * @param keyType   键类型
	 * @param valueType 值类型
	 * @param map       被转换的map
	 * @return Pair
	 */
	@SuppressWarnings("rawtypes")
	private static Pair<?, ?> mapToPair(final Type keyType, final Type valueType, final Map map) {

		Object left = null;
		Object right = null;
		if (1 == map.size()) {
			final Map.Entry entry = (Map.Entry) map.entrySet().iterator().next();
			left = entry.getKey();
			right = entry.getValue();
		} else if (2 == map.size()) {
			left = map.get("left");
			right = map.get("right");
		}

		final CompositeConverter convert = CompositeConverter.getInstance();
		return Pair.of(
			TypeUtil.isUnknown(keyType) ? left : convert.convert(keyType, left),
			TypeUtil.isUnknown(valueType) ? right : convert.convert(valueType, right)
		);
	}
}
