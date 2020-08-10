import React, { Fragment } from "react";
import "../assets/css/popup.css";

const Popup = ({ show, onClick, errorType, errorMessage }) => {
  return (
    <Fragment>
      <div
        className="popup--overlay">
        <div className="popup">
          <div className="popup--header">
            <h2>{errorType}</h2>
            <button
              onClick={onClick}
              className="popup--close">&times;</button>
          </div>
          <p className="popup--content">
            {errorMessage}
          </p>
        </div>
      </div>
    </Fragment>
  )
};

export default Popup;