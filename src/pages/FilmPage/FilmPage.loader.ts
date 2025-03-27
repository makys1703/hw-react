import { LoaderFunction } from 'react-router';
import { api } from '../../api';
import { getDeferedStore } from '../../router/router.utils';
import { mapFilmCardResponse, mapFilmDetailsResponse } from '../../utils/mapFilmResponse.utils';
import { filmDetailsActions, filmDetailsUtils } from '../../store/filmDetails';
import { IFilmDetails } from '../../types/filmDetails.interface';
import { filmsActions } from '../../store/films';


export const FilmPageLoader: LoaderFunction = async ({ params }): Promise<IFilmDetails> => {
  const store = await getDeferedStore();

  const cachedFilmDetails = filmDetailsUtils.getFilmDetails(params.id as string);

  if (cachedFilmDetails) {
    store.dispatch(
      filmDetailsActions.setLoadedFilmDetails(cachedFilmDetails)
    );
    return cachedFilmDetails;
  };

  const {data, error} = await api.getFilmDetailsById(params.id as string);

  if (!data || error) {
    throw new Error(error);
  }

  const filmDetails = mapFilmDetailsResponse(data);
  const filmCard = mapFilmCardResponse(data);

  filmDetailsUtils.addFilmDetails(filmDetails);

  store.dispatch(
    filmDetailsActions.setLoadedFilmDetails(filmDetails)
  );

  store.dispatch(
    filmsActions.addFilmToCache(filmCard)
  );

  return filmDetails;
  
};