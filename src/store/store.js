import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import moviesSlice from "./slices/moviesSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        movies: moviesSlice
    }
});

export default store;