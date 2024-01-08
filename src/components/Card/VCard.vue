<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <p v-for="item in list" class="card__text title-2 m-b-16">
      <span>{{ item[0] }}:</span> {{ item[1] || "No data" }}
    </p>
    <VSkeleton :loading="isLoading" :styleConfig="styleSkeleton" />
    <template #footer v-if="footer">{{ footer }}</template>
  </el-card>
</template>

<script setup>
import VSkeleton from "@/components/Skeleton/VSkeleton.vue";
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
  isLoading: {
    type: Boolean,
    default: false,
  }
});

const styleSkeleton = {
  height: "444px",
};
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__text {
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
