import React, { useState, useEffect, Fragment } from 'react';
import axios from "../axios/axios";
import requests from '../config/requests';
import "../assets/css/hero.css";

const idIsValid = (data) => {
  return data.filter(item => item.id);
};

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Hero = () => {

  const [movie, setMovie] = useState([]);
  const [populateMovie, setpopulateMovie] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(requests.popular);
      const response = idIsValid(request.data.results);
      const random = Math.floor(Math.random() * response.length - 1);
      const data = [];

      if (request.status === 200) {
        data.push(response[random]);
        setMovie(data);
        setpopulateMovie(true);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__body">
        {(populateMovie && movie) && movie.map((item) => {
          return (
            <Fragment key={item.id}>
              <h1 className="display-3 ml-4">
                {item?.original_title || item?.title || item?.name}
              </h1>
              <img src={`${baseUrl}${item.backdrop_path}`}
                alt={item.original_title}
              />
              <p className="hero__body-about ml-4 my-5">
                {item.overwiew}
              </p>
              <button
                className="d-block btn-lg btn btn-danger ml-4 hero__body-btn">
                Watch Trailer
          </button>
            </Fragment>
          )
        })
        }
        <div className="hero__form mx-auto text-center">
          <h3 className="my-3">
            Ready to watch? Enter your email to watch trailers.
          </h3>
          <form action="" method="post">
            <div className="form-group">
              <input
                className="px-2 form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <button className="btn btn-dark btn-lg">GET STARTED</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero;