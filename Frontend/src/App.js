import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Biography from "./Pages/Biography";
import Facilities from "./Pages/Facilities";
import Gallery from './Pages/Gallery';
import Pricelist from './Pages/Pricelist';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth';

function App() {
  return (
    <Router>
      <h1>Zentai-Beauty</h1>
      <Navigation />
      {/* <Route exact path="/" component={Home} /> */}
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
      <Route path="/Admin" exact>
        <Auth />
      </Route>
    </Router>
  );
}

export default App;
