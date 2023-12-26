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
      <el-icon v-if="icon"><icon-menu /></el-icon>
      <span>{{ label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, watch } from "vue";
import { ElMenu, ElIcon, ElMenuItem } from "element-plus";

import { Menu as IconMenu } from "@element-plus/icons-vue";

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

<style lang="scss" scoped>
.Navigation {
  align-items: center;
  flex-grow: 1;

  &-item {
    &--indent {
      margin-left: auto;
    }
  }

  &-modeSwitch {
    height: 100%;
  }

  &.el-menu--horizontal.el-menu {
    border: 0;
  }

  &.el-menu {
    --el-menu-bg-color: var(--bg-block);
  }

  :deep(.el-sub-menu) {
    margin-left: auto;
  }
}

.Navigation .el-menu--horizontal.el-menu--popup-container,
.el-menu.el-menu--popup.el-menu--popup-bottom-start {
  .Navigation-modeSwitch {
    height: unset;
    margin-left: 9px;
  }
}
</style>
