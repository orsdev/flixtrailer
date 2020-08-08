import React from 'react';
import MovieGrid from './component/MovieGrid';
import requests from './config/requests';
import Nav from './component/Nav';
import Hero from './component/hero';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero
        fetchUrl={requests.popular} />
      <MovieGrid
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflix} />
      <MovieGrid
        title="TRENDING NOW"
        fetchUrl={requests.trending} />
      <MovieGrid
        title="TOP RATED"
        fetchUrl={requests.topRated} />
      <MovieGrid
        title="POPULAR MOVIES"
        fetchUrl={requests.popular} />
    </div>
  );
}

export default App;
