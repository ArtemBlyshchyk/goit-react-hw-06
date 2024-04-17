import { configureStore } from "@reduxjs/toolkit";
import { cotactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: cotactsReducer,
    filters: filtersReducer,
  },
});
