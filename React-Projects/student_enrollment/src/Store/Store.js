import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "./StudentsSlice";
export const Store = configureStore({
    reducer: {
        students: StudentsSlice
    },
});
