import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("information", {
  state: () => ({
    stats: {},
    version: {},
  }),
  getters: {},
  actions: {
    async getInformationStats() {
      const response = await api.information.readInformationStats();

      this.stats = response.data;
    },

    async getInformationVersion(id) {
      const response = await api.information.readInformationVersion();

      this.version = response.data;
    },
  },
});
