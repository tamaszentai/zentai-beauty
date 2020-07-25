import React from "react";
import { Link, Switch } from "react-router-dom";

import "./Navigation.css";

const Navigation = (props) => {
  let links;

  if (props.loggedIn) {
    links = (
      <div className="navigation">
        <Link to="/Biography">Magamról</Link>
        <Link to="/Facilities">Szolgáltatások</Link>
        <Link to="/Gallery">Galéria</Link>
        <Link to="/Pricelist">Árlista</Link>
        <Link to="/Contact">Kapcsolat</Link>
        <Link to="/Admin">Admin</Link>
      </div>
    );
  } else {
    links = (
      <div className="navigation">
        <Link to="/Biography">Magamról</Link>
        <Link to="/Facilities">Szolgáltatások</Link>
        <Link to="/Gallery">Galéria</Link>
        <Link to="/Pricelist">Árlista</Link>
        <Link to="/Contact">Kapcsolat</Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <main>{links}</main>
    </React.Fragment>
  );
};

export default Navigation;
