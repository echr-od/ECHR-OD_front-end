import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("scl", {
  state: () => ({
    sclList: [],
    scl: {},
  }),
  getters: {},
  actions: {
    async getSclList(page, limit) {
      const response = await api.scl.readSclList(page, limit);

      this.sclList = response.data;
    },

    async getScl(id) {
      const response = await api.scl.readScl(id);

      this.scl = response.data;
    },
  },
});
