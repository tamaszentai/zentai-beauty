import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Biography from "./Pages/Biography";
import Gallery from './Pages/Gallery';
import Pricelist from './Pages/Pricelist';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  let routes;
  if(loggedIn) {
    routes = (
      <Switch>
      <Route path="/Biography" exact>
      <Biography loggedIn={loggedIn}/>
    </Route>
    <Route path="/Gallery" exact>
      <Gallery loggedIn={loggedIn}/>
    </Route>
    <Route path="/Pricelist" exact>
      <Pricelist loggedIn={loggedIn}/>
    </Route> 
    <Route path="/Contact" exact>
      <Contact />
    </Route>
    <Route path="/Login" exact>
      <Auth />
    </Route>
    </Switch>
    );
  } else {
    routes = (
      <Switch>
      <Route path="/Biography" exact>
      <Biography loggedIn={loggedIn}/>
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
      <Navigation loggedIn={loggedIn}/>
      <main>{routes}</main>
      </Router>
  );
}

export default App;
