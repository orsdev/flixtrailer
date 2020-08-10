import React, { Fragment } from "react";
import requests from '../config/requests';
import Nav from './Nav';
import Footer from './Footer';
import MovieGrid from './MovieGrid';
import Hero from './Hero';

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Hero />
      <MovieGrid
        className="movies__now-playing"
        title="NOW PLAYING"
        fetchUrl={requests.nowPlaying} />
      <MovieGrid
        className="movies__popular"
        title="POPULAR MOVIES"
        fetchUrl={requests.popular} />
      <Footer />
    </Fragment>
  )
};

export default Home;