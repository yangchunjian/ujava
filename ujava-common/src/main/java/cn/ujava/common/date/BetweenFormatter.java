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

package cn.ujava.common.date;

import cn.ujava.common.text.StrUtil;

import java.io.Serializable;

/**
 * 时长格式化器，用于格式化输出两个日期相差的时长<br>
 * 根据{@link Level}不同，调用{@link #format()}方法后返回类似于：
 * <ul>
 *    <li>XX小时XX分XX秒</li>
 *    <li>XX天XX小时</li>
 *    <li>XX月XX天XX小时</li>
 * </ul>
 *
 * @author ujava
 */
public class BetweenFormatter implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 时长毫秒数
	 */
	private long betweenMs;
	/**
	 * 格式化级别
	 */
	private Level level;
	/**
	 * 格式化级别的最大个数
	 */
	private final int levelMaxCount;

	/**
	 * 构造
	 *
	 * @param betweenMs 日期间隔
	 * @param level     级别，按照天、小时、分、秒、毫秒分为5个等级，根据传入等级，格式化到相应级别
	 */
	public BetweenFormatter(final long betweenMs, final Level level) {
		this(betweenMs, level, 0);
	}

	/**
	 * 构造
	 *
	 * @param betweenMs     日期间隔
	 * @param level         级别，按照天、小时、分、秒、毫秒分为5个等级，根据传入等级，格式化到相应级别
	 * @param levelMaxCount 格式化级别的最大个数，假如级别个数为1，但是级别到秒，那只显示一个级别
	 */
	public BetweenFormatter(final long betweenMs, final Level level, final int levelMaxCount) {
		this.betweenMs = betweenMs;
		this.level = level;
		this.levelMaxCount = levelMaxCount;
	}

	/**
	 * 格式化日期间隔输出<br>
	 *
	 * @return 格式化后的字符串
	 */
	public String format() {
		final StringBuilder sb = new StringBuilder();
		if (betweenMs > 0) {
			final long day = betweenMs / DateUnit.DAY.getMillis();
			final long hour = betweenMs / DateUnit.HOUR.getMillis() - day * 24;
			final long minute = betweenMs / DateUnit.MINUTE.getMillis() - day * 24 * 60 - hour * 60;

			final long BetweenOfSecond = ((day * 24 + hour) * 60 + minute) * 60;
			final long second = betweenMs / DateUnit.SECOND.getMillis() - BetweenOfSecond;
			final long millisecond = betweenMs - (BetweenOfSecond + second) * 1000;

			final int level = this.level.ordinal();
			int levelCount = 0;

			if (isLevelCountValid(levelCount) && 0 != day) {
				sb.append(day).append(Level.DAY.name);
				levelCount++;
			}
			if (isLevelCountValid(levelCount) && 0 != hour && level >= Level.HOUR.ordinal()) {
				sb.append(hour).append(Level.HOUR.name);
				levelCount++;
			}
			if (isLevelCountValid(levelCount) && 0 != minute && level >= Level.MINUTE.ordinal()) {
				sb.append(minute).append(Level.MINUTE.name);
				levelCount++;
			}
			if (isLevelCountValid(levelCount) && 0 != second && level >= Level.SECOND.ordinal()) {
				sb.append(second).append(Level.SECOND.name);
				levelCount++;
			}
			if (isLevelCountValid(levelCount) && 0 != millisecond && level >= Level.MILLISECOND.ordinal()) {
				sb.append(millisecond).append(Level.MILLISECOND.name);
				// levelCount++;
			}
		}

		if (StrUtil.isEmpty(sb)) {
			sb.append(0).append(this.level.name);
		}

		return sb.toString();
	}

	/**
	 * 获得 时长毫秒数
	 *
	 * @return 时长毫秒数
	 */
	public long getBetweenMs() {
		return betweenMs;
	}

	/**
	 * 设置 时长毫秒数
	 *
	 * @param betweenMs 时长毫秒数
	 */
	public void setBetweenMs(final long betweenMs) {
		this.betweenMs = betweenMs;
	}

	/**
	 * 获得 格式化级别
	 *
	 * @return 格式化级别
	 */
	public Level getLevel() {
		return level;
	}

	/**
	 * 设置格式化级别
	 *
	 * @param level 格式化级别
	 */
	public void setLevel(final Level level) {
		this.level = level;
	}

	/**
	 * 格式化等级枚举
	 *
	 * @author ujava
	 */
	public enum Level {

		/**
		 * 天
		 */
		DAY("天"),
		/**
		 * 小时
		 */
		HOUR("小时"),
		/**
		 * 分钟
		 */
		MINUTE("分"),
		/**
		 * 秒
		 */
		SECOND("秒"),
		/**
		 * 毫秒
		 */
		MILLISECOND("毫秒");

		/**
		 * 级别名称
		 */
		private final String name;

		/**
		 * 构造
		 *
		 * @param name 级别名称
		 */
		Level(final String name) {
			this.name = name;
		}

		/**
		 * 获取级别名称
		 *
		 * @return 级别名称
		 */
		public String getName() {
			return this.name;
		}
	}

	@Override
	public String toString() {
		return format();
	}

	/**
	 * 等级数量是否有效<br>
	 * 有效的定义是：levelMaxCount大于0（被设置），当前等级数量没有超过这个最大值
	 *
	 * @param levelCount 登记数量
	 * @return 是否有效
	 */
	private boolean isLevelCountValid(final int levelCount) {
		return this.levelMaxCount <= 0 || levelCount < this.levelMaxCount;
	}
}
