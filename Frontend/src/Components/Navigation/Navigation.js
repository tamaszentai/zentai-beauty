import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/zblogo.png";
import signinout from "../../images/signinout.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <React.Fragment>
      <main>
        <div className="navigation nav">
          <ul>
        <img className="logo" src={logo} />
        <h1>Zentai Beauty</h1>
          <li><Link to="/Biography">Bemutatkozás</Link></li>
          <li><Link to="/Gallery">Galéria</Link></li>
          <li><Link to="/Pricelist">Árjegyzék</Link></li>
          <li><Link to="/Login"><img className="loginlogo" src={signinout} /></Link></li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navigation;
