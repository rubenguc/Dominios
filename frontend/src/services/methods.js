import api from "@/services/api";

export default {
  get(url) {
    return api().get(url);
  },
  post(url, data) {
    return api().post(url, data);
  },
  put(url, data) {
    return api().put(url, data);
  },
  delete(url) {
    return api().delete(url);
  }
};
