import { createContext, useContext } from 'react';

import { RootStore } from './root.store';

const rootStore = new RootStore();

const StoreContext = createContext(rootStore);

export const useStores = () => {
  return useContext(StoreContext);
};
