import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("parties", {
  state: () => ({
    partiesList: [],
    party: {},
  }),
  getters: {},
  actions: {
    async getPartiesList(page, limit) {
      const response = await api.parties.readPartiesList(page, limit);

      this.partiesList = response.data;
    },

    async getParty(id) {
      const response = await api.parties.readParty(id);

      this.party = response.data;
    },
  },
});
