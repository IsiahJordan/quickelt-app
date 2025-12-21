import axios from 'axios'

const restApi = axios.create({
  baseURL: "http://127.0.0.1:8000/rest",
  headers: { "Content-Type": "application/json" }
});

restApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

restApi.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default restApi;
