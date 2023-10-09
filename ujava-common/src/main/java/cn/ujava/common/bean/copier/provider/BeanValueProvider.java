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

import cn.ujava.common.bean.BeanDesc;
import cn.ujava.common.bean.BeanUtil;
import cn.ujava.common.bean.PropDesc;
import cn.ujava.common.bean.copier.ValueProvider;
import cn.ujava.common.convert.Convert;

import java.lang.reflect.Type;

/**
 * Bean值提供器
 *
 * @author ujava
 */
public class BeanValueProvider implements ValueProvider<String> {

	private final Object bean;
	private final BeanDesc beanDesc;

	/**
	 * 构造
	 *
	 * @param bean Bean
	 */
	public BeanValueProvider(final Object bean) {
		this.bean = bean;
		this.beanDesc = BeanUtil.getBeanDesc(bean.getClass());
	}

	@Override
	public Object value(final String key, final Type valueType) {
		final PropDesc prop = beanDesc.getProp(key);
		if (null != prop) {
			return Convert.convert(valueType, prop.getValue(bean));
		}
		return null;
	}

	@Override
	public boolean containsKey(final String key) {
		return null != beanDesc.getProp(key);
	}
}
