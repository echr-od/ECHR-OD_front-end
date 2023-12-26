import { api } from "@/lib/axios";

export default {
  readSclList: (page, limit) => api.get(`/scl?page=${page}&limit=${limit}`),
  readScl: (id) => api.get(`/scl/${id}`),
};
