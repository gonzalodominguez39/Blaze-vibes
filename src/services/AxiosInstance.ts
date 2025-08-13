import axios from "axios";
import { API_BASE_URL } from "../constant/API";

export const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: { "X-Custom-Header": "foobar" },
});
