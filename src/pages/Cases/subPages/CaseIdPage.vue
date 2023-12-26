<template>
  <section>
    <div v-if="!isError">
      <p>{{ firstCard }}</p>
      <div class="d-flex gap-16 wrap m-t-24">
        <VCard
          class="m-t-24"
          title="Case details"
          :list="dividedCards.firstCard"
          :isLoading="isLoading"
        />
        <VCard
          class="m-t-24"
          title="Case details"
          :list="dividedCards.secondCard"
          :isLoading="isLoading"
        />
      </div>

      <section class="m-t-16">
        <h2>Judgment</h2>

        <ul class="case-id__plan">
          <h3 class="m-t-16 m-b-16">Plan:</h3>
          <JudgmentPlanRecursive
            v-for="(element, i) in store.case.judgment"
            :key="i"
            :index="i + 1"
            :data="element"
          />
        </ul>

        <JudgmentContentRecursive
          v-for="(element, i) in store.case.judgment"
          :key="i"
          :index="i + 1"
          :data="element"
        />
      </section>
      <VSkeleton :loading="isLoading" :styleConfig="styleTable" />
    </div>

    <VError v-if="isError" />
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted, computed } from "vue";
import { useGlobalStore } from "@/stores/cases";
import VCard from "@/components/Card/VCard.vue";
import VError from "@/components/VError/index.vue";
import VSkeleton from "@/components/Skeleton/VSkeleton.vue";
import JudgmentContentRecursive from "@/pages/Cases/components/JudgmentContentRecursive.vue";
import JudgmentPlanRecursive from "@/pages/Cases/components/JudgmentPlanRecursive.vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});

const styleTable = {
  "max-width": "calc(100vw - 312px)",
  width: "min-content",
  height: "calc(100vh - 284px)",
};

const store = useGlobalStore();
const { id } = toRefs(props);
const isLoading = ref(false);
const isError = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    await store.getCase(id.value);
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
    isError.value = !Object.keys(store.case).length;
  }
});

const storeCase = computed(() => {
  const { judgment, ...rest } = store.case;
  return Object.entries(rest).sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });
});

const dividedCards = computed(() => {
  const lengthFirstList = Math.ceil(storeCase.value.length / 2);
  const firstCard = storeCase.value.slice(0, lengthFirstList);
  const secondCard = storeCase.value.slice(
    lengthFirstList,
    storeCase.value.length,
  );

  return { firstCard, secondCard };
});
</script>

<style scoped lang="scss">
.case-id__plan {
  border-left: 2px solid #fff;
  padding-left: 16px;

  :deep(span) {
    font-style: italic;
  }

  :deep(a) {
    cursor: pointer;
  }
}
</style>
