import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import exerciseReducer from "./slices/exerciseSlice"; // Your slice reducer

// Configuration for redux-persist
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["exercise"], // Specify which reducers to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, exerciseReducer);

const store = configureStore({
    reducer: {
        exercise: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST", // Allow redux-persist actions
                    "persist/REHYDRATE",
                    "persist/REGISTER",
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
