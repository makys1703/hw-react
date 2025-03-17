import { LoaderFunction } from 'react-router';
import { api } from '../../api';
import { mapFilmDetailsResponse } from '../../utils/mapFilmResponse.utils';
import { FilmDetailsResponse } from '../../types/filmDetailsResponse.interface';
import { IFilmDetails } from '../../types/filmDetails.interface';


export const FilmPageLoader: LoaderFunction = async ({ params }): Promise<IFilmDetails> => {

  const {data, error} = await api.get<FilmDetailsResponse>(`/?tt=tt${params.id}`);

  if (!data || error) {
    throw new Error(error);
  }

  return mapFilmDetailsResponse(data);
};