import React from "react";
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
    </div>
  );
}
export default App;
