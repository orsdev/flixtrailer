import React from "react";
import "../assets/css/spinner.css";

const Spinner = (props) => {
  return (
    <div className='spinner_container'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;