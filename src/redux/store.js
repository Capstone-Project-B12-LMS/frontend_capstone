import { configureStore } from "@reduxjs/toolkit";
import contohReducer from "./contohSlice";

export default configureStore({
    reducer: {
        contoh: contohReducer,
    },
})