<template>
  <el-pagination
    :current-page="currentPage"
    background
    layout="prev, pager, next"
    :total="200"
    :page-size="20"
    @update:current-page="test"
    hide-on-single-page
  />
</template>

<script setup>
import { ElPagination } from "element-plus";
import "element-plus/es/components/pagination/style/css";

const emit = defineEmits(["update:v-model"]);

function test(e) {
  emit("update", e);
}
defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  configuration: {
    type: Array,
    default: () => [],
  },
});
</script>
