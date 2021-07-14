import React from "react";
import "./Hero.css"
import ParticlesConfig from "./ParticlesConfig";
const Hero = props => {
    return (
        <section className = "TextContainer">
                <div className="main-title">
                    <h1>A-TEL Andrzej Borzek</h1>
                    <h2>Technologie Światłowodowe</h2>
                </div>
                <ParticlesConfig/>
        </section>
    )
}
export default Hero
