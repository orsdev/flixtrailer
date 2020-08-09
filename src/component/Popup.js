import React, { Fragment } from "react";
import "../assets/css/popup.css";

const Popup = ({ show, onClick }) => {
  return (
    <Fragment>
      {show !== null && <div
        className="overlay">
        <div className="popup">
          <div className="popup--header">
            <h2>NETWORK ERROR</h2>
            <button
              onClick={onClick}
              className="popup--close">&times;</button>
          </div>
          <p className="popup--content">
            Please connect to the internet and refresh your browser.
		    </p>
        </div>
      </div>
      }
    </Fragment>
  )
};

export default Popup;