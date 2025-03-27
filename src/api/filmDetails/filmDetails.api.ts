import { api } from '../api';
import { ApiResponse } from '../api';
import { FilmDetailsResponse } from '../../types/filmDetailsResponse.interface';


export const filmDetailsApi = {

  async getFilmDetailsById(id: string, signal?: AbortSignal): Promise<ApiResponse<FilmDetailsResponse>> {
    return await api.get(`/?tt=tt${id}`, signal);
  }

};