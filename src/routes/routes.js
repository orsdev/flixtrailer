import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../component/Home";
import ShowMovieTrailer from "../component/showMovieTrailer";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trailer" component={ShowMovieTrailer} />
      </Switch>
    </Fragment>
  )
};

export default Routes;