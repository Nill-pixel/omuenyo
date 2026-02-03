import type { AxiosRequestConfig } from "axios";
import { apiConfig } from "../shared/config/api";

export class Api {
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    return await apiConfig.get<T>(endpoint, { params }).then((res) => res.data);
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return await apiConfig.post<T>(endpoint, data).then((res) => res.data);
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return await apiConfig.put<T>(endpoint, data).then((res) => res.data);
  }

  async delete<T>(endpoint: string): Promise<T> {
    return await apiConfig.delete<T>(endpoint).then((res) => res.data);
  }

  async postWithResonse<T>(
    endpoint: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<{ data: T; status: number }> {
    return await apiConfig
      .post<T>(endpoint, data, config)
      .then((res) => ({ data: res.data, status: res.status }));
  }
}

export const api = new Api();
