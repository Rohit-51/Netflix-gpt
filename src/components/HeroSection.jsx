import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovies, fetchMovieTrailers } from "../store/thunks/moviesThunk";

const HeroSection = () => {
  const dispatch = useDispatch();
  const { nowPlaying, loading, error } = useSelector((state) => state.movies);
  const { trailers, loading: trailerLoading, error: trailerError } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  useEffect(() => {
    if(nowPlaying?.results?.length > 0) {
      const firstMovieId = nowPlaying.results[0]?.id;
      dispatch(fetchMovieTrailers(firstMovieId));
    }
  }, [nowPlaying]);
  console.log("Now Playing Movies:", {nowPlaying, trailers});

  return (
    <header className="absolute top-0 left-0 h-[52.25vh] w-full overflow-hidden text-white">
      
      {/* Background Video */}
      <iframe 
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover -z-20"
        src="https://www.youtube.com/embed/v8R0xDczERo?autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        // referrerpolicy="strict-origin-when-cross-origin" 
        // allowfullscreen
      >
      </iframe>
      
      {/* <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover -z-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/trailer.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black -z-10" />

      {/* Content */}
      <div className="absolute bottom-1/4 left-6 md:left-16 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Stranger Things
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-2 rounded bg-white px-6 py-2 text-black font-semibold hover:bg-gray-200">
            ▶ Play
          </button>

          <button className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-2 font-semibold hover:bg-gray-500">
            ℹ More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
