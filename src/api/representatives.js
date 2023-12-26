import { api } from "@/lib/axios";

export default {
  readRepresentativesList: (page, limit) =>
    api.get(`/representatives?page=${page}&limit=${limit}`),
  readRepresentative: (id) => api.get(`/representatives/${id}`),
};
