<template>
  <HopeNormalPage>
    <!-- 使用 bottom 插槽引入评论组件 -->
    <template #contentAfter>
      <div style="text-align: center">
        <h4>公众号更有货，推荐关注！</h4>
        <img src="https://ujava.cn/logo/gzh-wz.png"/>
      </div>
    </template>
  </HopeNormalPage>
</template>
<script setup lang="ts">
import HopeNormalPage from "vuepress-theme-hope/components/NormalPage.js";
</script>