import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_OPTIONS } from "../../utils/constants";

export const fetchNowPlayingMovies = createAsyncThunk(
    "movies/fetchNowPlaying",
    async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Error fetching now playing movies:", error);
            // throw error;
        }   
    }
);

export const fetchMovieTrailers = createAsyncThunk(
    "moview/fetchTrailers",
    async (movieId) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Error fetching movie trailers:", error);
        }
    }
)