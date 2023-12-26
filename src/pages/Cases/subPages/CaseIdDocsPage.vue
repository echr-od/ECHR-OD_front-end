<template>
  <section>
    <h1>CaseIdDocsPage</h1>
    <!-- TODO: not work downloading of files, parsed_judgment is implemented in CaseIdWrapper  -->
    <button @click="downloadDocx">Download DOCX</button>
    <a
      href="blob:http://localhost:5173/a49369ac-f7ad-4b47-b034-2831a51f1691"
      download="file1.docx"
    >
      download
    </a>
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted } from "vue";
import { useGlobalStore } from "@/stores/cases";

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
    await store.getCaseDocsList(id.value);

    if (store.caseDocsList.judgment.available) {
      await store.getCaseDocsDoctype(id.value, "judgment");
    }

    if (store.caseDocsList.parsed_judgment.available) {
      await store.getCaseDocsDoctype(id.value, "parsed_judgment");
    }
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
    isError.value = !Object.keys(store.caseDocsList).length;
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
