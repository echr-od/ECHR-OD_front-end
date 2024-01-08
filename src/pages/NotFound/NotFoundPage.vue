<template>
  <!-- TODO: reuse VError component -->
  <section class="error routerView">
    <div>
      <Vue3Lottie :animationData="notFoundPage" :height="200" :width="200" />

      <h3 class="error__text">Not found page, please go back to the home page.</h3>

      <RouterLink class="d-block m-t-32" :to="{ name: 'Cases' }">
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
.error {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
