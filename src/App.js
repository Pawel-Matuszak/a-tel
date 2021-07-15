import React from "react";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Map from "./Components/Map"
import Button from "./Components/Button"
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import References from "./components/References";
import Equipment from "./components/Equipment";

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
