import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("representatives", {
  state: () => ({
    representativesList: [],
    representative: {},
  }),
  getters: {},
  actions: {
    async getRepresentativesList(page, limit) {
      const response = await api.representatives.readRepresentativesList(
        page,
        limit,
      );

      this.representativesList = response.data;
    },

    async getRepresentative(id) {
      const response = await api.representatives.readRepresentative(id);

      this.representative = response.data;
    },
  },
});
