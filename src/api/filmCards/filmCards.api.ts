import { api } from '../api';
import { ApiResponse } from '../api';
import { FilmCardsResponse } from '../../types/filmCardsResponse.interface';


export const filmCardsApi = {

  async getFilmCardsByQuery(query: string, signal?: AbortSignal): Promise<ApiResponse<FilmCardsResponse>> {
    return await api.get(`/?q=${query}`, signal);
  }

};



