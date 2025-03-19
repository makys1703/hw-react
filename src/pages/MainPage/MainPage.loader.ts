import { api } from '../../api';
import { mapFilmCardResponse } from '../../utils/mapFilmResponse.utils';
import { FilmCard } from '../../types/filmCard.interface';


const filmIds = ['3480822', '9376612', '9140554', '0460649', '6468322', '0108778', '0898266', '0369179'];

export const MainPageLoader = async (): Promise<FilmCard[]> => {
  const responses = filmIds.map((id) => api.getFilmDetailsById(id));
  const awaitedData = await Promise.all(responses);

  return awaitedData.map(({ data, error }) => {

    if (!data || error) {
      throw new Error(error);
    }

    return mapFilmCardResponse(data);
  });
};