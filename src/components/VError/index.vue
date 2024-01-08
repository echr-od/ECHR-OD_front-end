<template>
  <section class="error routerView">
    <div>
      <Vue3Lottie :animationData="error" :height="200" :width="200" />

      <h3 class="error__text">
        An error occurred, please check your Internet connection or the
        relevance of the API key.
      </h3>

      <h3 class="error__text">
        If you can't solve this problem, write to our support team
        <a class="highlight" href="mailto: support@test.com"
          >support@test.com</a
        >
      </h3>
    </div>
  </section>
</template>

<script setup>
// TODO: Vue3Lottie move to components
import { Vue3Lottie } from "vue3-lottie";
import error from "@/assets/animations/error.json";
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
