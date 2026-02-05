import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    nowPlayingMovieList();
  }, []);
   
  const nowPlayingMovieList = () => {
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODY3YzE0Y2ExNGMwNmI4NDg0MDQ2NTQwNDNiM2E4ZSIsIm5iZiI6MTc2ODg0MjEwNC4zMDksInN1YiI6IjY5NmU2Mzc4Yzc1ZGZjOTM5NTIwZDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BZ_ajK7DdHjwRyO3m1hUQcAYGnXo2OBPwrzWYjLIPOY'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }
  console.log("nowPlayingMovies",nowPlayingMovies);
  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default Home