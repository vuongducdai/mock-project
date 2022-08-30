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
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import productSlice from "./admin/productSlice";
import userSlice from "./admin/userSlice";
import cartSlice from "./client/cartSlice";
import clientProductSlice from './client/productSlice';
import toolbarSlice from "./admin/toolbarSlice";


const rootReducer = combineReducers({
	productSlice,
	userSlice,
	cartSlice,
	clientProductSlice,
      toolbarSlice
});

//  Handle user login when reloading page
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartSlice'],
	blacklist: ['productSlice', 'userSlice'],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: presistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
