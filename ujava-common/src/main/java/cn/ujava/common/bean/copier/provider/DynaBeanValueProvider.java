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

import cn.ujava.common.bean.DynaBean;
import cn.ujava.common.bean.copier.ValueProvider;
import cn.ujava.common.convert.Convert;

import java.lang.reflect.Type;

/**
 * DynaBean值提供者
 *
 * @author ujava
 * @since 5.4.2
 */
public class DynaBeanValueProvider implements ValueProvider<String> {

	private final DynaBean dynaBean;
	private final boolean ignoreError;

	/**
	 * 构造
	 *
	 * @param dynaBean        DynaBean
	 * @param ignoreError 是否忽略错误
	 */
	public DynaBeanValueProvider(final DynaBean dynaBean, final boolean ignoreError) {
		this.dynaBean = dynaBean;
		this.ignoreError = ignoreError;
	}

	@Override
	public Object value(final String key, final Type valueType) {
		final Object value = dynaBean.get(key);
		return Convert.convertWithCheck(valueType, value, null, this.ignoreError);
	}

	@Override
	public boolean containsKey(final String key) {
		return dynaBean.containsProp(key);
	}

}
