import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {

  return (
    <React.Fragment>
      <main>
        <div className="navigation">
          <Link to="/Biography">Bemutatkozás</Link>
          <Link to="/Gallery">Galéria</Link>
          <Link to="/Pricelist">Árjegyzék</Link>
          <Link to="/Contact">Elérhetőségek</Link>
          <Link to="/Login">Bejelentkezés</Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navigation;
