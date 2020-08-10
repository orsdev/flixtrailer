import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as actions from "../store/actions";
import YouTube from "react-youtube";
import Backdrop from "./Backdrop";
import "../assets/css/youtube.css";

const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    origin: 'https://www.youtube.com/',
    enablejsapi: '1',
    autoplay: 1
  },
}

const ShowMovieTrailer = ({ trailerUrl: { url, isSetUrl }, onRemoveURL }) => {

  const closeMovieTrailer = () => {
    onRemoveURL();
  }

  return (
    <Fragment>
      {isSetUrl ?
        <Backdrop>
          <div className="container-fluid">
            <div className="row">
              <div className="text-center mx-auto youtube-container">
                <YouTube
                  className="youtube"
                  videoId={url}
                  opts={opts} />
                <button
                  onClick={closeMovieTrailer}
                  className="youtube--close">&times;</button>
              </div>
            </div>
          </div>
        </Backdrop>

        : <Redirect to="/" />
      }
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    trailerUrl: state.trailerUrl,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveURL: () => dispatch(actions.removeTrailerUrl())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovieTrailer);
