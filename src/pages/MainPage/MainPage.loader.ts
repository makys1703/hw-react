import { getDeferedStore } from '../../router/router.utils';
import { filmsActions } from '../../store/films';


export const MainPageLoader = async (): Promise<void> => {
  const store = await getDeferedStore();
  store.dispatch(filmsActions.loadDefaultFilms());
};