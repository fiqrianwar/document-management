import { AxiosRequestConfig } from "axios";
import { api } from "./api";
import { ApiResponse } from "./type";

export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const res = await api.request<T>(config);
  return res.data;
}
