import axios from 'axios'

const graphqlApi = axios.create({
  baseURL: "http://127.0.0.1:8000/graphql",
  headers: { "Content-Type": "application/json" }
});

graphqlApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

graphqlApi.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default graphqlApi;
