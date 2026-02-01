import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network error

    if (!error.response) {
      return Promise.reject({
        status: true,
        message: "Network error. Please try again.",
      });
    }

    const { status, data } = error.response;

    return Promise.reject({
      status,
      message: data?.message || "Unexpected error",
      errors: data?.errors,
    });
  },
);
