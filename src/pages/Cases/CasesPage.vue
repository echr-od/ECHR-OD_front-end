<template>
  <section class="cases-page router-view">
    <h2 class="title-1 m-b-8">Cases</h2>
    <div v-if="!isError">
      <div class="filters m-b-24 d-flex wrap">
        <VSelect
          v-model="selectedCasesConfigurator"
          :options="optionsCasesListSelect"
          placeholder="Placeholder"
          @change="changeCasesConfigurator"
        />
        <VButton @click="resetTableConfiguration"> Reset </VButton>
      </div>
      <VTable
        :tableData="tableDataCasesList"
        :configuration="configuredCasesList"
        :styleConfig="styleTable"
        v-show="!isLoading"
        @rowClick="handleRowClick"
      />
      <VSkeleton :loading="isLoading" :styleConfig="styleSkeleton" />
      <VPagination
        @update="changePageNumber"
        :currentPage="currentPage"
        class="m-t-16"
      />
    </div>
    <VError v-if="isError" />
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useGlobalStore } from "@/stores/cases";
import {
  casesTableConfigurator,
  optionsCasesListSelect,
  tableDefaultConfigurator,
} from "@/pages/Cases/constants";
import { getReadyTableData } from "@/helpers";
import VError from "@/components/VError/index.vue";
import VSkeleton from "@/components/Skeleton/VSkeleton.vue";
import VTable from "@/components/Table/VTable.vue";
import VSelect from "@/components/Select/VSelect.vue";
import VButton from "@/components/Button/VButton.vue";
import VPagination from "@/components/Pagination/VPagination.vue";

const props = defineProps({
  id: {
    type: String,
    default: "1",
  },
});

const router = useRouter();
const route = useRoute();
const store = useGlobalStore();

const isLoading = ref(false);
const isError = ref(false);
const currentPage = ref(Number(route.query.page) || 1);
const limit = 10;
const styleTable = {
  "max-width": "calc(100vw - 312px)",
  width: "min-content",
  height: "calc(100vh - 284px)",
};
const styleSkeleton = {
  height: "calc(100vh - 284px)",
};

async function changePageNumber(pageNumber) {
  currentPage.value = pageNumber;
  router.push({ name: "Cases", query: { page: pageNumber } });
  await getCasesList(pageNumber, limit);
}

function handleRowClick({ itemid }) {
  router.push({ name: "CaseId", params: { id: itemid }, query: { page: currentPage.value } });
}

onMounted(async () => {
  await getCasesList(currentPage.value, limit)
});

async function getCasesList(pageNumber, limit) {
  try {
    isLoading.value = true;
    await store.getCasesList(pageNumber, limit);
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
    isError.value = !store.casesList.length;
  }
}

function changeCasesConfigurator(casesConfigurator) {
  localStorage.setItem("selectedCasesConfigurator", casesConfigurator);
}

function resetTableConfiguration() {
  selectedCasesConfigurator.value = tableDefaultConfigurator;
  changeCasesConfigurator(tableDefaultConfigurator);
}

const savedCasesConfigurator = ref(
  localStorage.getItem("selectedCasesConfigurator")?.split(","),
);
const selectedCasesConfigurator = ref(
  savedCasesConfigurator.value || tableDefaultConfigurator,
);

const configuredCasesList = computed(() => {
  return casesTableConfigurator.filter(({ name }) =>
    selectedCasesConfigurator.value.includes(name),
  );
});

const tableDataCasesList = computed(() =>
  getReadyTableData(store.casesList, configuredCasesList.value),
);
</script>
