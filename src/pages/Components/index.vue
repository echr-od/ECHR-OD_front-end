<template>
  <section>
    <h2>Components:</h2>
    <VButton :loading="true">Default</VButton>

    <VCarousel :movies="movies" />

    <br />
    <VInput v-model="input" placeholder="test placeholder" :icon="Calendar" />
    <p>{{ input }}</p>

    <br />

    <VSwitch
      @update:v-model="test"
      v-model="isDark"
      :activeIcon="Moon"
      :inActiveIcon="Sunny"
    />
    <p>{{ isDark }}</p>
  </section>
</template>

<script setup>
import { ref } from "vue";
import VButton from "@/components/Button/VButton.vue";
import VCarousel from "@/components/VCarousel/index.vue";
import VInput from "@/components/VInput/index.vue";
import VSwitch from "@/components/Switch/VSwitch.vue";

import { Calendar, Search, Sunny, Moon } from "@element-plus/icons-vue";

const movies = ref([
  {
    Title: "title 1",
    Poster: "Poster 1",
    Year: "Year 1",
    imdbID: "imdbID1",
    Director: "Director1",
  },
  {
    Title: "title 2",
    Poster: "Poster 2",
    Year: "Year 2",
    imdbID: "imdbID2",
    Director: "Director2",
  },
  {
    Title: "title 3",
    Poster: "Poster 3",
    Year: "Year 3",
    imdbID: "imdbID3",
    Director: "Director3",
  },
  {
    Title: "title 4",
    Poster: "Poster 4",
    Year: "Year 4",
    imdbID: "imdbID4",
    Director: "Director4",
  },
]);

const input = ref("");

const isDark = ref(false);

function test(v) {
  isDark.value = v;
}
</script>

<style lang="scss" scoped></style>
