import React from 'react';
import MovieGrid from './component/MovieGrid';
import requests from './config/requests';
import Nav from './component/Nav';
import Hero from './component/hero';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <MovieGrid
        title="ACTION MOVIES"
        fetchUrl={requests.action} />
      <MovieGrid
        title="TRENDING NOW"
        fetchUrl={requests.trending} />
      <MovieGrid
        title="HORROR MOVIES"
        fetchUrl={requests.horror} />
      <MovieGrid
        title="POPULAR MOVIES"
        fetchUrl={requests.popular} />
      <Footer />
    </div>
  );
}

export default App;
