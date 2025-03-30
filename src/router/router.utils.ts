import { store } from '../store';

export const getDeferedStore = (): Promise<typeof store> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(store);
  }, 0);
});
