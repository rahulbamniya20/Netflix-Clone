import React, { useState, useEffect } from "react";
import axios from "../request/axios";
import { Link } from "react-router-dom";
import "./Movies.css";

import TvBanner from "../components/TvBanner";

const Movie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const [resultMovie, setResultMovie] = useState([]);

  const APIKEY = "8a2705651c885ab1d285fc80ee1021c5";
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${searchMovie}`;
  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(movieUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [movieUrl]);

  const handleSearch = async () => {
    setIsLoading(true);

    const res = await fetch(apiUrl);
    const data = await res.json();

    setResultMovie(data.results);
    setIsLoading(false);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (resultMovie.length > 0) {
    return (
      <>
        <TvBanner title="Movies" />
        <div className="input-container">
          <input
            type="text"
            onChange={(e) => setSearchMovie(e.target.value)}
            className="movie_input"
          />
          <button onClick={handleSearch} className="movie_button">
            Search
          </button>
        </div>
        <div className="movie__posters">
          {resultMovie &&
            resultMovie.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                className="movie_link"
                key={movie.id}
              >
                <img
                  // onClick={() => handleClick(movie)}
                  loading="lazy"
                  src={`${baseImgUrl}${movie.poster_path}`}
                  alt={movie.name}
                  className={`movie__poster  row__posterLarge`}
                />
              </Link>
            ))}
        </div>
      </>
    );
  }
  return (
    <>
      <TvBanner title="Movies" />
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setSearchMovie(e.target.value)}
          className="movie_input"
        />
        <button onClick={handleSearch} className="movie_button">
          Search
        </button>
      </div>
      <div className="movie__posters">
        {movies &&
          movies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="movie_link"
              key={movie.id}
            >
              <img
                // onClick={() => handleClick(movie)}
                loading="lazy"
                src={`${baseImgUrl}${movie.poster_path}`}
                alt={movie.name}
                className={`movie__poster  row__posterLarge`}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Movie;
