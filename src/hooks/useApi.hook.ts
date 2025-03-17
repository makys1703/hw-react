import { useState } from 'react';
import { api } from '../api';


export function useApi<T>() {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const sendRequest = async (endpoint: string, signal?: AbortSignal) => {
    setIsLoading(true);
    const { data, error } = await api.get<T>(endpoint, signal);
    setIsLoading(false);

    if (error) {
      setError(error);
      return;
    }

    if (data) {
      setData(data);
    }
  };

  return { sendRequest, data, isLoading, error };
}