import { api } from "@/lib/axios";

export default {
  readCasesList: (page, limit) => api.get(`/cases?page=${page}&limit=${limit}`),
  readCase: (id) => api.get(`/cases/${id}`),
  readCaseDocsList: (id) => api.get(`/cases/${id}/docs`),
  readCaseDocsDoctype: (id, doctype) => api.get(`/cases/${id}/docs/${doctype}`),
  readCaseCitedapps: (id) => api.get(`/cases/${id}/citedapps`),
};
