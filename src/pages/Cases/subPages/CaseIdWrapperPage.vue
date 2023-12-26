<template>
  <section class="w-100 router-view">
    <header class="header d-flex m-b-8">
      <div class="case-id__back-block d-flex align-center">
        <VButton type="back" :to="toBackRoute" class="m-r-8" />
        <h2 class="title-2">Case № {{ id }}</h2>
      </div>

      <VNavigation
        class="case-id__navigation"
        :navigation="navigation"
        mode="horizontal"
      />
    </header>
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import { toRefs, ref, computed } from "vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import VButton from "@/components/Button/VButton.vue";
import VNavigation from "@/components/Navigation/VNavigation.vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});

const route = useRoute();
const { id } = toRefs(props);

const navigation: any = ref([
  {
    name: "CaseIdWrapper",
    icon: "",
    path: `/case/${id.value}`,
    label: "Case",
  },
  // {
  //   name: "CaseIdDocs",
  //   icon: "",
  //   path: `/case/${id.value}/docs`,
  //   label: "Docs",
  //   disabled: true,
  // },
  {
    name: "CaseIdCitedApps",
    icon: "",
    path: `/case/${id.value}/cited-apps`,
    label: "Cited app",
  },
]);

const toBackRoute = computed(() => {
  return {name: 'Cases', query: { page: Number(route.query.page) || 1 }}
})
</script>

<style scoped lang="scss">
$miv-items-amount: 2;
.header {
  justify-content: space-between;
  min-height: var(--header-height);
  flex-wrap: wrap;
  gap: 8px;
}

.case-id__navigation {
  gap: 16px;
  width: calc($miv-items-amount * 105px);
}

:deep(.el-menu--horizontal > .el-menu-item) {
  padding: 0 16px;
}

.case-id__back-block {
  min-width: 230px;
}
</style>
