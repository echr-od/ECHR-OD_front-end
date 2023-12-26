<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <p v-for="item in list" class="card__text m-b-16">
      <span>{{ item[0] }}:</span> {{ item[1] || "No data" }}
    </p>
    <template #footer v-if="footer">{{ footer }}</template>
  </el-card>
</template>

<script setup>
import { ElCard } from "element-plus";
import "element-plus/es/components/card/style/css";

defineProps({
  title: {
    type: String,
    default: "",
  },
  list: {
    type: Array,
    default: () => [],
  },
  footer: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__text {
  font-size: 16px;

  span {
    font-weight: bold;
  }
}

.box-card {
  flex-grow: 1;
  min-width: 380px;
  margin: 0;
}
</style>
