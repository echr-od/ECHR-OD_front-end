<template>
  <ElSkeleton
    class="skeleton__default"
    :rows="40"
    :loading="loading"
    animated
    :style="styleConfig"
  >
  </ElSkeleton>
</template>

<script setup>
import { ElSkeleton } from "element-plus";

import "element-plus/es/components/skeleton/style/css";
import "element-plus/es/components/skeleton-item/style/css";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  styleConfig: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped lang="scss">
.skeleton__default {
  overflow: hidden;
}
</style>
