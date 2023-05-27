import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { taxesService } from '@services/taxesService';

import { appSlice } from './slices';

const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [taxesService.reducerPath]: taxesService.reducer
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), taxesService.middleware]
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
