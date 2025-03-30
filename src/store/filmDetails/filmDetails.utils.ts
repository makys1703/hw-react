import { IFilmDetails } from '../../types/filmDetails.interface';


type FilmDetailsCache = Record<string, IFilmDetails>

const LOCALSTORAGE_KEY = 'filmDetails';

const getData = (): FilmDetailsCache | null => {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!data) {
    return null;
  };

  return JSON.parse(data);
};

const addFilmDetails = (data: IFilmDetails): void => {

  const cachedData = getData() ?? {};

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
    ...cachedData,
    [data.id]: data
  }));
};

const getFilmDetails = (id: string): IFilmDetails | null => {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!data) {
    return null;
  };

  const parsedData = JSON.parse(data) as FilmDetailsCache;

  if (!parsedData[id]) {
    return null;
  };

  return parsedData[id];
};

export const filmDetailsUtils = {
  addFilmDetails,
  getFilmDetails
};