import React, { useState, useEffect, Fragment } from 'react';
import axios from "../axios/axios";
import requests from '../config/requests';
import { idIsValid } from "./utils/idIsValid";
import "../assets/css/hero.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Hero = () => {

  const [movie, setMovie] = useState([]);
  const [populateMovie, setpopulateMovie] = useState(false);
  useEffect(() => {

    axios.get(requests.popular)
      .then(function (response) {
        const data = idIsValid(response.data.results);
        const random = Math.floor(Math.random() * data.length - 1);
        if (response && response.status) {
          setMovie([data[random]]);
          setpopulateMovie(true);
        }
      })
      .catch(function (error) {
        console.log(error, 'an error occured');
      })

  }, []);

  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__body">
        {(populateMovie && movie.length) && movie.map((item) => {
          return (
            <Fragment key={item?.id || item?.genre_ids[0] || item?.vote_average + item?.vote_count}>
              <h1 className="display-4 ml-4">
                {item?.original_title || item?.title || item?.name}
              </h1>
              <img src={`${baseUrl}${item?.backdrop_path}`}
                alt={item?.original_title || item?.title || item?.name} />
              <p className="hero__body-about ml-4 my-5">
                {item?.overview.length && item?.overview.substring(0, 250) + '...'}
              </p>
            </Fragment>
          )
        })
        }
      </div>
    </div>
  )
}

export default Hero;