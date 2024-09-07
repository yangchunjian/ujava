<script setup lang="ts">
import CommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
const frontmatter = usePageFrontmatter<ThemePageFrontmatter>();
const page = usePageData();
import HomePage from "@theme-hope/components/HomePage";

import type { ThemePageFrontmatter } from "vuepress-theme-hope";
import { usePageData, usePageFrontmatter } from "vuepress/client";
import NormalPage from "./NormalPage.vue";
import FadeSlideY from "@theme-hope/components/transitions/FadeSlideY";

</script>

<template>
  <CommonWrapper>
    <template #default>
      <HomePage v-if="frontmatter.home" />
      <FadeSlideY v-else>
        <NormalPage :key="page.path" />
      </FadeSlideY>
    </template>
    <!-- 使用 sidebarTop 插槽引入组件 -->
    <template  v-if="!frontmatter.home"  #sidebarTop>
      <div style="text-align: center">
        <img src="/logo/gzh.png"/>
      </div>
    </template>
  </CommonWrapper>
</template>
