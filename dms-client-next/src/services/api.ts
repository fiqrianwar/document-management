import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants/messages";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        status: true,
        message: NETWORK_ERROR,
      });
    }

    const { status, data } = error.response;

    return Promise.reject({
      status,
      message: data?.message || UNEXPECTED_ERROR,
      errors: data?.errors,
    });
  },
);
