import { api } from "@/lib/axios";

export default {
  readInformationStats: () => api.get(`/information/stats`),
  readInformationVersion: () => api.get(`/information/version`),
};
