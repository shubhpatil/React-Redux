import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import counterReducer from "./counter/reducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

const persistor = persistStore(store);

export { store, persistor };
