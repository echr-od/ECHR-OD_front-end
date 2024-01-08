import { api } from "@/lib/axios";

export default {
  readConclusionsList: (page, limit) =>
    api.get(`/conclusions?page=${page}&limit=${limit}`),
  readConclusion: (id) => api.get(`/conclusions/${id}`),
};
