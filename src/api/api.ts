import axios, { AxiosError } from 'axios';
import { ApiConfig } from './api.config';


export interface ApiResponse<T> {
  data?: T,
  error?: string
}

class Api {
  private axiosInstance = axios.create({
    baseURL: ApiConfig.API_BASE_URL
  });

  async get<T>(endpoint: string, signal?: AbortSignal): Promise<ApiResponse<T>> {
    try {
      const { data } = await this.axiosInstance.get<T>(endpoint, { signal });
      return { data };
    } catch(error) {
      if (error instanceof AxiosError) {
        return { error: error.message };
      }
      return { error: error?.toString() };
    }
  }
}

export const api = new Api();