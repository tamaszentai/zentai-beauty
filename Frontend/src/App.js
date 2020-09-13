import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Biography from "./Pages/Biography";
import Gallery from "./Pages/Gallery";
import Pricelist from "./Pages/Pricelist";
import AuthModal from "./Components/AuthModal/AuthModal";
import store from "./store";

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

  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          {/* <img src={zblogo}></img> */}
          {/* <h1>Zentai-Beauty</h1> */}
          <div className="navigation">
            <Navigation />
          </div>
          <Switch>
            <Route path="/Biography" exact>
              <div className="biography">
                <Biography loggedIn={loggedIn} />
              </div>
            </Route>
            <Route path="/Gallery" exact>
              <div className="gallery">
                <Gallery loggedIn={loggedIn} />
              </div>
            </Route>
            <Route path="/Pricelist" exact>
              <div className="pricelist">
                <Pricelist />
              </div>
            </Route>
            {/* <Route path="/Login" exact>
              <AuthModal />
            </Route> */}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
