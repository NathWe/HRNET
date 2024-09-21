import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

// Déclaration des types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
