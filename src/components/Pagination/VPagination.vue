<template>
  <el-pagination
    :current-page="currentPage"
    background
    layout="prev, pager, next"
    :total="amountOfCases"
    :page-size="10"
    @update:current-page="update"
    hide-on-single-page
  />
</template>

<script setup>
import { ElPagination } from "element-plus";
import "element-plus/es/components/pagination/style/css";
// TODO: amountOfCases need to get from the server, need for pagination
const amountOfCases = 16100; 
const emit = defineEmits(["update:v-model"]);

function update(e) {
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
