<template>
  <div>
    <VDivider v-if="index" />
    <h2
      v-if="data.elements.length"
      :id="data.content.replace(/\s/g, '')"
      :class="{ 'm-t-16': !index }"
      class="m-b-16"
    >
      <span v-if="index">{{ index }}. </span>
      <span>{{ data.content }}</span>
    </h2>
    <p v-else>{{ data.content }}</p>
  </div>
  <JudgmentContentRecursive
    v-for="(element, i) in data.elements"
    :key="i"
    :data="element"
  />
</template>

<script setup>
import VDivider from "@/components/Divider/VDivider.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>
