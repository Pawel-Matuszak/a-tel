import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from "./components/Header";
import Hero from "./components/Hero";
import ParticlesConfig from "./components/ParticlesConfig";
import Timeline from "./components/Timeline";
import About from "./components/About"
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollOverflow = {true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
          <Header/>
          <Hero/>
          <ParticlesConfig/>
          </div>
          <div className="section">
            <Timeline/>
            <About/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
  return (
    <div className="App">
      <Fullpage/>
    </div>
  );
}
export default App;
