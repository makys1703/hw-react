import { filmDetailsApi } from '../../api/filmDetails';
import { getDeferedStore } from '../../router/router.utils';
import { mapFilmCardResponse } from '../../utils/mapFilmResponse.utils';
import { filmsActions, filmsSelectors, filmsUtils } from '../../store/films';
import { FilmCard } from '../../types/filmCard.interface';


export const MainPageLoader = async (): Promise<FilmCard[]> => {
  const store = await getDeferedStore();

  const storeFilms = filmsSelectors.selectFilms(store.getState());
  const localStorageFilms = filmsUtils.getFilms();
  
  if (localStorageFilms && !storeFilms.length) {
    store.dispatch(
      filmsActions.setLoadedDefaultFilms(localStorageFilms)
    );

    return localStorageFilms;
  }
  
  if (storeFilms.length) {
    return storeFilms;
  };

  const responses = filmsUtils.defaultFilmIds.map((id) => filmDetailsApi.getFilmDetailsById(id));
  const awaitedData = await Promise.all(responses);
        
  const defaultFilms = awaitedData.map(({ data, error }) => {
    if (!data || error) {
      throw new Error(error);
    }
        
    return mapFilmCardResponse(data);
  });
  
  filmsUtils.setFilms(defaultFilms);
  store.dispatch(
    filmsActions.setLoadedDefaultFilms(defaultFilms)
  );
  
  return defaultFilms;
};