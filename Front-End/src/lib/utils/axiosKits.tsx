import axios from "axios";
import { localGet } from "./localStore";

export const Axios = axios.create({
  baseURL: `http://localhost:8000/api`,
});

export const authAxios = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
    Authorization: `Bearer ${localGet("UserData")?.token}`,
    Accept: "application/json",
  },
});
