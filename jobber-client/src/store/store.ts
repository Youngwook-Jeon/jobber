import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from './api';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['clientApi', '_persist']
};

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer
  // authUser: authReducer,
  // logout: logoutReducer,
  // buyer: buyerReducer,
  // seller: sellerReducer,
  // header: headerReducer,
  // showCategoryContainer: categoryReducer,
  // notification: notificationReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: EnhancedStore = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
