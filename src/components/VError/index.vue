<template>
  <section class="Error routerView">
    <div>
      <Vue3Lottie :animationData="error" :height="200" :width="200" />

      <p class="Error-text">
        An error occurred, please check your Internet connection or the
        relevance of the API key.
      </p>

      <p class="Error-text">
        If you can't solve this problem, write to our support team
        <a class="highlight" href="mailto: support@test.com"
          >support@test.com</a
        >
      </p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import VButton from "@/components/Button/VButton.vue";
// TODO: Vue3Lottie move to components
import { Vue3Lottie } from "vue3-lottie";
import error from "@/assets/animations/error.json";
</script>

<style lang="scss" scoped>
.Error {
  display: flex;
  justify-content: center;
  align-items: center;

  &-text {
    font-size: 24px;
  }

  &-link {
    display: block;
    margin-top: 32px;
  }
}
</style>
