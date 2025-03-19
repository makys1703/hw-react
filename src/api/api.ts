import axios, { AxiosError } from 'axios';
import { ApiConfig } from './api.config';
import { FilmCardsResponse } from '../types/filmCardsResponse.interface';
import { FilmDetailsResponse } from '../types/filmDetailsResponse.interface';


interface ApiResponse<T> {
  data?: T,
  error?: string
}

class Api {
  private _axiosInstance = axios.create({
    baseURL: ApiConfig.API_BASE_URL
  });

  private async _get<T>(endpoint: string, signal?: AbortSignal): Promise<ApiResponse<T>> {
    try {
      const { data } = await this._axiosInstance.get<T>(endpoint, { signal });
      return { data };
    } catch(error) {
      if (error instanceof AxiosError) {
        return { error: error.message };
      }
      return { error: error?.toString() };
    }
  }

  async getFilmCardsByQuery(query: string, signal?: AbortSignal): Promise<ApiResponse<FilmCardsResponse>> {
    return await this._get(`/?q=${query}`, signal);
  }

  async getFilmDetailsById(id: string, signal?: AbortSignal): Promise<ApiResponse<FilmDetailsResponse>> {
    return await this._get(`/?tt=tt${id}`, signal);
  }
}

export const api = new Api();