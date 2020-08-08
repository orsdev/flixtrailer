import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "../assets/css/moviegrid.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const MovieGrid = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      if (request.status === 200) {
        setMovies(await request.data.results);
      }
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="movies__wrapper px-5">
      <h2 className="text-light movies__title">{title}</h2>
      <div className="movies">
        <div className="movies__item">

          {
            movies && movies.map((movie) => {
              return (
                <section key={movie.id}>
                  <div className="movies__item-poster">
                    <img src={`${baseUrl}${movie.backdrop_path}`}
                      alt={movie.name} />
                  </div>
                  <div className="movies__item-about">
                    <h3 className="px-2 py-2">{movie.original_name || movie.original_title}</h3>
                    <p >{movie.release_date}</p>
                  </div>
                  <button
                    className="btn px-2 py-2"
                    data-id={movie.id}>Watch The Trailer</button>
                </section>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MovieGrid;
