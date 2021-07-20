import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Map from "./Components/Map"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About"
import References from "./Components/References";
import Equipment from "./Components/Equipment";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import gsap from "gsap"

function App() {
  const bgNotActive = element =>{
    gsap.fromTo(element, {}, {
      background: "#052957"
    })
  }

  const bgActive = element => {
    gsap.fromTo(element, {}, {
      background: "#07336E"
    })
  }

  return (
    <Router>
        <ScrollToTop/>
        <Header/>
        <Switch>
          <Route path="/galeria">
            <Gallery/>
          </Route>
          <Route path="/">
            <Hero/>
            <Services bgNotActive={bgNotActive} bgActive={bgActive}/>
            <About bgNotActive={bgNotActive} bgActive={bgActive}/>
            <References bgNotActive={bgNotActive} bgActive={bgActive}/>
            <Equipment bgNotActive={bgNotActive} bgActive={bgActive}/>
            <Contact bgNotActive={bgNotActive} bgActive={bgActive}/>
            <Map/>
          </Route>

        </Switch>
        <Footer/>
    </Router>
    
  );
}
export default App;
