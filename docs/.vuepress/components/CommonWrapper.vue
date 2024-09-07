<template>
  <HopeCommonWrapper>
    <!-- 使用 sidebarBottom 插槽引入组件 -->
    <template #sidebarBottom>
      <div style="text-align: center">
        <img src="/logo/gzh.png"/>
      </div>
    </template>

  </HopeCommonWrapper>
</template>
<script setup lang="ts">
import HopeCommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
</script>