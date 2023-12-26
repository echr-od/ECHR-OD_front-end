import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("conclusions", {
  state: () => ({
    conclusionsList: [],
    conclusion: {},
  }),
  getters: {},
  actions: {
    async getConclusionsList(page, limit) {
      const response = await api.conclusions.readConclusionsList(page, limit);

      this.conclusionsList = response.data;
    },

    async getConclusion(id) {
      const response = await api.conclusions.readConclusion(id);

      this.conclusion = response.data;
    },
  },
});
