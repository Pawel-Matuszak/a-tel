import React from "react";
import "./hero.css";
import ParticlesConfig from "../Particles/ParticlesConfig";

const Hero = () => {
  return (
    <section className="textContainer">
      <ParticlesConfig />
      <div className="main-title">
        <h1>A-TEL Andrzej Borzek</h1>
        <h2>Technologie Światłowodowe</h2>
      </div>
    </section>
  );
};
export default Hero;
