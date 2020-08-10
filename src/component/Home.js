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
        title="ACTION MOVIES"
        fetchUrl={requests.action} />
      {/* <MovieGrid
        title="TRENDING NOW"
        fetchUrl={requests.trending} />
      <MovieGrid
        title="HORROR MOVIES"
        fetchUrl={requests.horror} />
      <MovieGrid
        title="POPULAR MOVIES"
        fetchUrl={requests.popular} /> */}
      <Footer />
    </Fragment>
  )
};

export default Home;