import React from "react";
import { Link, Switch } from "react-router-dom";

import "./Navigation.css";

const Navigation = (props) => {
  let links;

  if (props.loggedIn) {
    links = (
      <div className="navigation">
        <Link to="/Biography">Bemutatkozás</Link>
        <Link to="/Gallery">Galéria</Link>
        <Link to="/Pricelist">Árjegyzék</Link>
        <Link to="/Contact">Elérhetőségek</Link>
        <Link to="/Logout">Kijelentkezés</Link>
      </div>
    );
  } else {
    links = (
      <div className="navigation">
        <Link to="/Biography">Bemutatkozás</Link>
        <Link to="/Gallery">Galéria</Link>
        <Link to="/Pricelist">Árjegyzék</Link>
        <Link to="/Contact">Elérhetőségek</Link>
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
