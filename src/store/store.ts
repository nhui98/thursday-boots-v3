import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import basketReducer from "./features/basket/basketSlice";
import flyoutReducer from "./features/flyout/flyoutSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    flyout: flyoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
