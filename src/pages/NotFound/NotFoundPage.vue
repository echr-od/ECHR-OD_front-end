<template>
  <!-- TODO: reuse VError component -->
  <section class="Error routerView">
    <div>
      <Vue3Lottie :animationData="notFoundPage" :height="200" :width="200" />

      <p class="Error-text">Not found page, please go back to the home page.</p>

      <RouterLink class="Error-link" :to="{ name: 'Cases' }">
        <VButton> Go cases </VButton>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import VButton from "@/components/Button/VButton.vue";
// TODO: Vue3Lottie move to components
import { Vue3Lottie } from "vue3-lottie";

import notFoundPage from "@/assets/animations/notFoundPage.json";
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
