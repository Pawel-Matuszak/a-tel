import React from "react";
import "./Hero.css"
import ParticlesConfig from "./ParticlesConfig";
const Hero = ({passRef}) => {
    return (
        <section className = "textContainer" ref={passRef}>
            <ParticlesConfig/>
            <div className="main-title">
                <h1>A-TEL Andrzej Borzek</h1>
                <h2>Technologie Światłowodowe</h2>
            </div>
        </section>
    )
}
export default Hero
