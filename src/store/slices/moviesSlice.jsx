import { createSlice } from "@reduxjs/toolkit";
import { fetchNowPlayingMovies, fetchMovieTrailers } from "../thunks/moviesThunk";


const initialState = {
    nowPlaying: [],
    trailers:[],
    popular: [],
    topRated: [],
    upcoming: [],
    loading: false,
    error: null
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Extra reducers will be added here to handle async thunks
        builder.addCase(fetchNowPlayingMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.nowPlaying = action.payload;
        });
        builder.addCase(fetchNowPlayingMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(fetchMovieTrailers.pending, (state) => {
            state.loading = true;
            state.error = null;        
        });
        builder.addCase(fetchMovieTrailers.fulfilled, (state, action) => {
            state.loading = false;
            state.trailers = action.payload;
        });
        builder.addCase(fetchMovieTrailers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const { setLoading, setError } = moviesSlice.actions;
export default moviesSlice.reducer;