import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; 

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export function setAuthToken(token?: string) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}
