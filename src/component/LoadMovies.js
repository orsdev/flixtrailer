import React, { Fragment } from "react";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const LoadMovies = ({ movies, onClick }) => {
  return (
    <Fragment>
      {
        (movies.length) && movies.map((movie) => {
          return (
            <section key={movie.id}>
              <div className="movies__item-poster">
                <img src={`${baseUrl}${movie?.backdrop_path}`}
                  alt={movie?.name || movie?.title} />
              </div>
              <div className="movies__item-about">
                <h3 className="px-2 py-2">{movie?.name || movie?.title}</h3>
                <p >{movie?.release_date}</p>
              </div>
              <button
                className="btn px-2 py-2"
                onClick={() => { onClick(movie) }}>
                Watch Trailer
              </button>
            </section>
          )
        })
      }
    </Fragment>
  )
};

export default LoadMovies;