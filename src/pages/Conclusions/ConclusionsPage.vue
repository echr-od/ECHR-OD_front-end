<template>
  <section class="cases-page router-view">
    <h2 class="title-1 m-b-8">Conclusions</h2>
    <div v-if="!isError">
      <!-- TODO: there is not pagination, endpoint does not work -->
      <!-- <div class="filters m-b-24">
        <VSelect
          v-model="selectedCasesConfigurator"
          :options="optionsCasesListSelect"
          placeholder="Placeholder"
          @change="changeCasesConfigurator"
        />
        <VButton @click="resetTableConfiguration"> Reset </VButton>
      </div> -->
      <!-- <VTable
        :tableData="tableDataCasesList"
        :configuration="configuredCasesList"
        :styleConfig="styleTable"
        v-show="!isLoading"
        @rowClick="handleRowClick"
      /> -->
      <VSkeleton :loading="isLoading" :styleConfig="styleTable" />
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
import { toRefs, ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/conclusions";
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

const store = useGlobalStore();
// const { id } = toRefs(props)
const isLoading = ref(false);
const isError = ref(false);
const currentPage = ref(1);
const styleTable = {
  "max-width": "calc(100vw - 312px)",
  width: "min-content",
  height: "calc(100vh - 284px)",
};

function changePageNumber(pageNumber) {
  currentPage.value = pageNumber;
}

const router = useRouter();

function handleRowClick({ itemid }) {
  router.push({ name: "CaseIdWrapper", params: { id: itemid } });
}

onMounted(async () => {
  const page = 1;
  const limit = 10;

  try {
    isLoading.value = true;
    await store.getConclusionsList(page, limit);
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
    isError.value = !store.conclusionsList.length;
  }
});

// function changeCasesConfigurator(casesConfigurator) {
//   localStorage.setItem('selectedCasesConfigurator', casesConfigurator)
// }

// function resetTableConfiguration() {
//   selectedCasesConfigurator.value = tableDefaultConfigurator
//   changeCasesConfigurator(tableDefaultConfigurator)
// }

// const savedCasesConfigurator = ref(
//   localStorage.getItem('selectedCasesConfigurator')?.split(',')
// )
// const selectedCasesConfigurator = ref(
//   savedCasesConfigurator.value || tableDefaultConfigurator
// )

// const configuredCasesList = computed(() => {
//   return casesTableConfigurator.filter(({ name }) =>
//     selectedCasesConfigurator.value.includes(name)
//   )
// })

// const tableDataCasesList = computed(() =>
//   getReadyTableData(store.casesList, configuredCasesList.value)
// )
</script>
