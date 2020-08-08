import React from 'react';
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer container-fluid mt-5">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h5 className="text-light">FLIXTRAILER</h5>
        </div>
        <div className="col-lg-12 text-center mt-2">
          <small className="text-light">
            <span>Copyright &copy; 2020</span>
            <span className="logo ml-1">FLIXTRAILER</span>
          </small>
        </div>
      </div>
    </footer>
  )
};

export default Footer;