<template>
  <CommonWrapperPage>
    <!-- 使用 contentAfter 插槽引入组件 -->
    <template #sidebarTop>
      <div style="text-align: center">
        <img src="/logo/gzh.png"/>
      </div>
    </template>
  </CommonWrapperPage>
</template>
<script setup lang="ts">
import CommonWrapperPage from "vuepress-theme-hope/components/CommonWrapper.js";
</script>