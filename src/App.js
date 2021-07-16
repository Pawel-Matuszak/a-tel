import React from "react";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Map from "./Components/Map"
import Button from "./Components/Button"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About"
import References from "./Components/References";
import Equipment from "./Components/Equipment";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <References/>
      <Equipment/>
      <Contact/>
      <Map/>
      <Footer/>
      </div>
  );
}
export default App;
