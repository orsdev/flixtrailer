import React, { Fragment } from "react";
import "../assets/css/backdrop.css";

const Backdrop = ({ children }) => {
  return (
    <Fragment>
      <div
        className="backdrop--overlay">
        {children}
      </div>

    </Fragment>
  )
};

export default Backdrop;