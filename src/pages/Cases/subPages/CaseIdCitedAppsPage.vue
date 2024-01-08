<template>
  <section>
    <h1>Cited Apps</h1>

    <div class="d-flex wrap gap-16 m-t-24">
      <VTag
        v-for="(citedApp, i) in store.caseCitedApps"
        :key="i"
        :text="citedApp"
      />
    </div>
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted } from "vue";
import { useGlobalStore } from "@/stores/cases";
import VTag from "@/components/Tag/VTag.vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});

const store = useGlobalStore();
const { id } = toRefs(props);
const isLoading = ref(false);
const isError = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    await store.getCaseCitedapps(id.value);
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
    isError.value = !Object.keys(store.caseCitedApps).length;
  }
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 var(--el-menu-base-level-padding);
  min-height: var(--header-height);
}

.case-id__navigation {
  width: 500px;
}
</style>
