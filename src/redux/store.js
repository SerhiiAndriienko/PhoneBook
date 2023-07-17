import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterReducerSlice } from './filterSlice/filterSlice';
import { contactsSliceReduser } from './contactListSlice/contactListSlice';
import { authSliceReduser } from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    contacts: contactsSliceReduser,
    filter: filterReducerSlice,
    auth: persistReducer(
      {
        key: 'auth',
        storage,
        whitelist: ['token'],
      },
      authSliceReduser
    ),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
