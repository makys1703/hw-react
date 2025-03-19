import { useState } from 'react';
import { api } from '../../../../../api';
import { FilmCardsResponse } from '../../../../../types/filmCardsResponse.interface';


export function useQuery() {
  const [data, setData] = useState<FilmCardsResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const sendRequest = async (query: string, signal?: AbortSignal) => {
    setLoading(true);
    const { data, error } = await api.getFilmCardsByQuery(query, signal);
    setLoading(false);

    if (error) {
      setError(error);
      return;
    }

    if (data) {
      setData(data);
    }
  };

  return { sendRequest, data, loading, error };
}