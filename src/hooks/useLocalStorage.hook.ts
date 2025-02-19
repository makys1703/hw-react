import { useState, useEffect } from 'react';


export function useLocalStorage<State>(key: string, initialState: State): [State, (state: State) => void] {
  const [data, setData] = useState<State>(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (item) {
      setData(JSON.parse(item) as State);
    }

  }, [key]);

  const setLocalStorageData = (data: State) => {
    localStorage.setItem(key, JSON.stringify(data));
    setData(data);
  };

  return [data, setLocalStorageData];
}