import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("cases", {
  state: () => ({
    casesList: [],
    case: {},
    caseDocsList: [],
    caseDocsDoctype: {
      judgment: null,
      parsed_judgment: null,
    },
    caseCitedApps: [],
  }),
  getters: {},
  actions: {
    async getCasesList(page, limit) {
      const response = await api.cases.readCasesList(page, limit);

      this.casesList = response.data;
    },

    async getCase(id) {
      const response = await api.cases.readCase(id);

      this.case = response.data;
    },

    async getCaseDocsList(id) {
      const response = await api.cases.readCaseDocsList(id);

      this.caseDocsList = response.data;
    },

    async getCaseDocsDoctype(id, doctype) {
      // judgment, parsed_judgment
      const response = await api.cases.readCaseDocsDoctype(id, doctype);
      // could be file or text
      this.caseDocsDoctype[doctype] = response.data;
    },

    async getCaseCitedapps(id) {
      const response = await api.cases.readCaseCitedapps(id);

      this.caseCitedApps = response.data;
    },
  },
});
