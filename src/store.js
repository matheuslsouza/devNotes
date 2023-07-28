import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage correctly

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage, // Provide AsyncStorage as the storage engine
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
