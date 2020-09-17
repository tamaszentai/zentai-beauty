import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/zblogo.png";
import AuthModal from "../AuthModal/AuthModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <main>
        <div className="navigation nav">
          <ul>
            <Link to="/"><img className="logo" src={logo} /></Link>
            <h1>Zentai Beauty</h1>
            <li>
              <Link to="/Biography">Bemutatkozás</Link>
            </li>
            <li className="dropdown">
              {" "}
              <a href="javascript:void(0)" class="dropbtn">
                Galéria
              </a>
              <div class="dropdown-content">
              <Link to="/Gallery">Smink</Link>
              <Link to="/TattooGallery">Sminktetoválás</Link>
              </div>
            </li>
            <li>
              <Link to="/Pricelist">Árjegyzék</Link>
            </li>
            <li>
              <AuthModal />
            </li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navigation;
