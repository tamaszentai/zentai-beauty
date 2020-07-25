import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Biography from "./Pages/Biography";
import Facilities from "./Pages/Facilities";
import Gallery from './Pages/Gallery';
import Pricelist from './Pages/Pricelist';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth';
import Admin from './Pages/Admin';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  let routes;
  if(loggedIn) {
    routes = (
      <Switch>
      <Route path="/Biography" exact>
      <Biography />
    </Route>
    <Route path="/Facilities" exact>
      <Facilities />
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
      <Auth />
    </Route>
    <Route path="/Admin" exact>
      <Admin />
    </Route>
    </Switch>
    );
  } else {
    routes = (
      <Switch>
      <Route path="/Biography" exact>
      <Biography />
    </Route>
    <Route path="/Facilities" exact>
      <Facilities />
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
      <Auth />
    </Route>
    </Switch>
    )

  }

  return (
    <Router>
      <h1>Zentai-Beauty</h1>
      <Navigation />
      <main>{routes}</main>
      </Router>
  );
}

export default App;
