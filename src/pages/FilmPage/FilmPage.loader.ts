import { LoaderFunction } from 'react-router';
import { filmDetailsApi } from '../../api/filmDetails';
import { getDeferedStore } from '../../router/router.utils';
import { filmsActions } from '../../store/films';
import { mapFilmCardResponse, mapFilmDetailsResponse } from '../../utils/mapFilmResponse.utils';
import { filmDetailsActions, filmDetailsUtils } from '../../store/filmDetails';
import { FilmPageError } from './FilmPage.constants';
import { IFilmDetails } from '../../types/filmDetails.interface';


export const FilmPageLoader: LoaderFunction = async ({ params }): Promise<IFilmDetails> => {
  if (!params.id || Number.isNaN(Number(params.id))) {
    throw new Error(FilmPageError.param);
  }

  const store = await getDeferedStore();

  const cachedFilmDetails = filmDetailsUtils.getFilmDetails(params.id);

  if (cachedFilmDetails) {
    store.dispatch(
      filmDetailsActions.setLoadedFilmDetails(cachedFilmDetails)
    );
    return cachedFilmDetails;
  };

  const {data, error} = await filmDetailsApi.getFilmDetailsById(params.id);

  if (error || !data) {
    throw new Error(FilmPageError.noData);
  }

  const filmDetails = mapFilmDetailsResponse(data);
  const filmCard = mapFilmCardResponse(data);

  store.dispatch(
    filmDetailsActions.setLoadedFilmDetails(filmDetails)
  );

  store.dispatch(
    filmsActions.addFilmToCache(filmCard)
  );

  filmDetailsUtils.addFilmDetails(filmDetails);

  return filmDetails;
};