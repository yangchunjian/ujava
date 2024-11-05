<template>
  <HopeNormalPage>
    <!-- 使用 contentAfter 插槽引入组件 -->
    <template #contentAfter>
      <div style="text-align: center">
        <h4><social-share
            :networks="['qrcode', 'wechat', 'qq', 'weibo']"
            is-plain
        /></h4>
<!--        <h4><Share :services="['qq','weibo','qrcode','email']" colorful /></h4>-->
        <h4>公众号更有货，推荐关注！</h4>
        <img src="https://ujava.cn/logo/gzh-wz.png"/>
      </div>
    </template>
  </HopeNormalPage>
</template>
<script setup lang="ts">
import HopeNormalPage from "vuepress-theme-hope/components/NormalPage.js";
</script>