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

package cn.ujava.common.bean.copier.provider;

import cn.ujava.common.bean.copier.ValueProvider;
import cn.ujava.common.convert.Convert;

import java.lang.reflect.Type;
import java.util.Map;

/**
 * Map值提供者
 *
 * @author ujava
 */
@SuppressWarnings("rawtypes")
public class MapValueProvider implements ValueProvider<String> {

	private final Map map;

	/**
	 * 构造
	 *
	 * @param map map
	 */
	public MapValueProvider(final Map map) {
		this.map = map;
	}

	@Override
	public Object value(final String key, final Type valueType) {
		return Convert.convert(valueType, map.get(key));
	}

	@Override
	public boolean containsKey(final String key) {
		return map.containsKey(key);
	}
}
