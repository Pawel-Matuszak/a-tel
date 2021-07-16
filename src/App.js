import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Map from "./Components/Map"
import Button from "./Components/Button"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About"
import References from "./Components/References";
import Equipment from "./Components/Equipment";
import Gallery from "./Components/Gallery";

function App() {

  return (
    <Router>
        <ScrollToTop/>
        <Header/>
        <Switch>
          <Route path="/gallery">
            <Gallery/>
          </Route>

          <Route path="/">
            <Hero/>
            <About/>
            <References/>
            <Equipment/>
            <Contact/>
            <Map/>
          </Route>

        </Switch>
        <Footer/>
    </Router>
    
  );
}
export default App;
