import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

import productSlice from './productSlice';

const rootReducer = combineReducers({
      productSlice,
});

//  Handle user login when reloading page
const persistConfig = {
      key: 'root',
      storage,
      blacklist: ['productSlice',],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
      reducer: presistedReducer,
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }),
      devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)


