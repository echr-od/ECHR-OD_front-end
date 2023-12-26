import { api } from "@/lib/axios";

export default {
  readPartiesList: (page, limit) =>
    api.get(`/parties?page=${page}&limit=${limit}`),
  readParty: (id) => api.get(`/parties/${id}`),
};
