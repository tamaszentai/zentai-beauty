import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Biography from "./Pages/Biography";
import Gallery from "./Pages/Gallery";
import Pricelist from "./Pages/Pricelist";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";
import BioModal from "./Pages/BioModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const userName = "Betti";
  const password = "halacska";

  const toggle = () => setIsOpen(!isOpen);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route path="/Biography" exact>
          <Biography loggedIn={loggedIn} />
        </Route>
        <Route path="/Gallery" exact>
          <Gallery loggedIn={loggedIn} />
        </Route>
        <Route path="/Pricelist" exact>
          <Pricelist loggedIn={loggedIn} />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Login" exact>
          <Auth login={login} userName={userName} password={password} />
        </Route>
        <Route path="/BioModal" exact>
          <BioModal />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/Biography" exact>
          <Biography loggedIn={loggedIn} />
        </Route>
        <Route path="/Gallery" exact>
          <Gallery />
        </Route>
        <Route path="/Pricelist" exact>
          <Pricelist />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Login" exact>
          <Auth login={login} userName={userName} password={password} />
        </Route>
      </Switch>
    );
  }

  return (
    <React.Fragment>
      <Router>
        {/* <img src={zblogo}></img> */}
        <h1>Zentai-Beauty</h1>
        <Navigation />
        <button onClick={logout}>Kijelentkezés</button>
        <main>{routes}</main>
      </Router>
    </React.Fragment>
  );
}

export default App;
