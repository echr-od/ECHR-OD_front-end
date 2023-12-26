<template>
  <header class="header">
    <VSwitch
      @update:v-model="onchange"
      v-model="isDark"
      :activeIcon="Moon"
      :inActiveIcon="Sunny"
      class="header__switch-theme"
    />
  </header>

  <main class="main">
    <VNavigation class="navigation" :navigation="navigation" />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref, watch } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
import VNavigation from "@/components/Navigation/VNavigation.vue";
import VSwitch from "@/components/Switch/VSwitch.vue";

const navigation = ref([
  {
    name: "Information",
    icon: "",
    path: "/",
    label: "Information",
  },
  {
    name: "Cases",
    icon: "",
    path: "/cases?page=1",
    label: "Cases",
  },
  {
    name: "Conclusions",
    icon: "",
    path: "/conclusions",
    label: "Conclusions",
    disabled: true,
  },
  {
    name: "Parties",
    icon: "",
    path: "/parties",
    label: "Parties",
    disabled: true,
  },
  {
    name: "Representatives",
    icon: "",
    path: "/representatives",
    label: "Representatives",
    disabled: true,
  },
  {
    name: "Scl",
    icon: "",
    path: "/scl",
    label: "SCL",
    disabled: true,
  },
]);

const isDark = ref(JSON.parse(localStorage.getItem('isDark')) || false);

function onchange(value) {
  isDark.value = value;
  localStorage.setItem('isDark', value)
  console.log('onchange: ',localStorage.getItem('isDark'));
}

watch(
  isDark, 
  (newIsDark) => {
    const className = newIsDark ? "dark" : "light";
    document.querySelector("html").setAttribute("class", className);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 var(--el-menu-base-level-padding);
  min-height: var(--header-height);
  background-color: var(--bg-block);
  box-shadow: var(--shadow-header);

  &__switch-theme {
    margin-left: auto;
  }

  @include tablet-lower {
    padding: 0 36px;
  }
}

.main {
  display: flex;
  height: calc(100vh - var(--header-height));

  .navigation {
    flex: 0 0 200px;
  }

  :deep(.routerView) {
    flex: 1;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background-color: var(--bg-block);
  padding: 0 80px;
  line-height: var(--footer-height);
  box-shadow: var(--shadow-footer);

  @include tablet-lower {
    padding: 0 36px;
  }
}
</style>
