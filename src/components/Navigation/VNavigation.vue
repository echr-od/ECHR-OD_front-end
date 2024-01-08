<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="false"
    @open="handleOpen"
    @close="handleClose"
    router
    :default-active="loadedUrl"
    :mode="mode"
  >
    <el-menu-item
      v-for="({ disabled, icon, path, label }, i) in navigation"
      :key="i"
      :index="path"
      :disabled="disabled"
    >
      <el-icon><component :is="icon" /></el-icon>
      <span>{{ label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, watch } from "vue";
import { ElMenu, ElIcon, ElMenuItem } from "element-plus";

import "element-plus/es/components/menu/style/css";
import "element-plus/es/components/menu-item/style/css";

defineProps({
  navigation: {
    type: Array,
    default: () => [],
  },
  mode: {
    type: String,
    default: "",
    validator(value) {
      return ["vertical", "horizontal"].includes(value);
    },
  },
});

const url = window.location.href?.split("/");
const loadedUrl = ref(`/${url[url.length - 1]}`);

const isDark = ref(true);

watch(isDark, (newIsDark) => {
  const className = newIsDark ? "dark" : "light";
  document.querySelector("html").setAttribute("class", className);
});
</script>
