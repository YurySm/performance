import {combineReducers, configureStore} from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice.ts";
import {clothingSlice} from "../services/clothing/clothingSlice.ts";

const combinedReducers = combineReducers({
    basket: basketSlice.reducer,
    [clothingSlice.reducerPath]: clothingSlice.reducer,
})

export const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(clothingSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type TypeRootState = ReturnType<typeof combinedReducers>