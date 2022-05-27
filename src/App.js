import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import References from "./Components/References/References";
import Equipment from "./Components/Equipment/Equipment";
import Gallery from "./Components/Gallery/Gallery";
import Services from "./Components/Services/Services";
import gsap from "gsap";

const App = () => {
  gsap.config({
    nullTargetWarn: false,
  });
  const bgNotActive = (element) => {
    gsap.fromTo(
      element,
      {},
      {
        background: "#052957",
      }
    );
  };

  const bgActive = (element) => {
    gsap.fromTo(
      element,
      {},
      {
        background: "#07336E",
      }
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/galeria">
          <Gallery />
        </Route>
        <Route path="/">
          <Hero />
          <Services bgNotActive={bgNotActive} bgActive={bgActive} />
          <About bgNotActive={bgNotActive} bgActive={bgActive} />
          <References bgNotActive={bgNotActive} bgActive={bgActive} />
          <Equipment bgNotActive={bgNotActive} bgActive={bgActive} />
          <Contact bgNotActive={bgNotActive} bgActive={bgActive} />
          <Map />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
