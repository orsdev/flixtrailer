import React, { useState, useEffect, Fragment } from "react";
import axios from "../axios/axios";
import movieTrailer from "movie-trailer";
import { idIsValid } from "./utils/idIsValid";
import { withRouter } from "react-router-dom";
import Backdrop from "./Backdrop";
import Spinner from "./Spinner";
import "../assets/css/moviegrid.css";
import { connect } from 'react-redux';
import * as actions from "../store/actions";
import withErrorHandler from "./withErrorHandler";
import LoadMovies from "./LoadMovies";

const MovieGrid = (props) => {

  const { title, fetchUrl, error } = props;
  const { trailerUrl, onSetURL, onRemoveURL, history } = props;

  const [movies, setMovies] = useState([]);
  const [loadTrailer, setLoadTrailer] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      if (request && request.status) {
        const response = idIsValid(request.data.results);
        setMovies(response);
      }
    }

    fetchMovies();
  }, [fetchUrl]);

  useEffect(() => {
    if (trailerUrl) {
      history.push('/trailer')
    }
  }, [trailerUrl]);


  const handleClick = (movie) => {

    setLoadTrailer(true);

    if (trailerUrl) {
      onRemoveURL();
    }

    movieTrailer(movie?.name || movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        onSetURL(urlParams.get('v'));
      })
      .catch((error) => {
        console.log('bad things happen');
        setLoadTrailer(false);
        onRemoveURL();
      })
  }

  return (
    <Fragment>
      {!loadTrailer ?
        <div className="movies__wrapper px-5">
          <h2 className="text-light movies__title">{title}</h2>
          <div className="movies">
            {
              !error ?
                <div className="movies__item">
                  {
                    (movies.length) ?
                      <LoadMovies
                        movies={movies}
                        onClick={handleClick} />
                      : <Spinner />
                  }
                </div> : null}
          </div>
        </div>
        :
        <Backdrop>
          <Spinner />
        </Backdrop>
      }
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    trailerUrl: state.trailerUrl.url
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetURL: (url) => dispatch(actions.initTrailerUrl(url)),
    onRemoveURL: () => dispatch(actions.removeTrailerUrl())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(withRouter(MovieGrid), axios));
