import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import References from "./components/References";
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <References/>
    </div>
  );
}
export default App;
