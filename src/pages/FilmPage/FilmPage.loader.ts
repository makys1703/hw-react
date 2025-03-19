import { LoaderFunction } from 'react-router';
import { api } from '../../api';
import { mapFilmDetailsResponse } from '../../utils/mapFilmResponse.utils';
import { IFilmDetails } from '../../types/filmDetails.interface';


export const FilmPageLoader: LoaderFunction = async ({ params }): Promise<IFilmDetails> => {
  const {data, error} = await api.getFilmDetailsById(params.id!);

  if (!data || error) {
    throw new Error(error);
  }

  return mapFilmDetailsResponse(data);
};