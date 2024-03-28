import axios from "axios";
import { localGet } from "./localStore";

export const Axios = axios.create({
  baseURL: `https://job-web-be.vercel.app/api`,
});

export const authAxios = axios.create({
  baseURL: `https://job-web-be.vercel.app/api`,
  headers: {
    Authorization: `Bearer ${localGet("UserData")?.token}`,
    Accept: "application/json",
  },
});
