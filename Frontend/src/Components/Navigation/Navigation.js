import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/Biography">Magamról</Link>
      <Link to="/Facilities">Szolgáltatások</Link>
      <Link to="/Gallery">Galéria</Link>
      <Link to="/Pricelist">Árlista</Link>
      <Link to="/Contact">Kapcsolat</Link>
    </div>
  );
};

export default Navigation;
