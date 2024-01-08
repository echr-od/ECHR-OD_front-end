<template>
  <ElTag size="large">{{ text }}</ElTag>
</template>

<script setup>
import { ElTag } from "element-plus";
import "element-plus/es/components/tag/style/css";

defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
