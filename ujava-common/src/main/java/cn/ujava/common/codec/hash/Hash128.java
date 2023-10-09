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

package cn.ujava.common.codec.hash;

import cn.ujava.common.codec.Encoder;
import cn.ujava.common.codec.Number128;

/**
 * Hash计算接口
 *
 * @param <T> 被计算hash的对象类型
 * @author ujava
 * @since 5.2.5
 */
@FunctionalInterface
public interface Hash128<T> extends Encoder<T, Number> {

	/**
	 * 计算Hash值
	 *
	 * @param t 对象
	 * @return hash
	 */
	Number128 hash128(T t);

	@Override
	default Number encode(final T t){
		return hash128(t);
	}
}
