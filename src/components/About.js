import React, { useRef } from "react";
import { useIntersection } from "react-use";
import "./About.css";
const About = ({ bgNotActive, bgActive }) => {
  const about = useRef(null);

  const aboutIntersection = useIntersection(about, {
    root: null,
    rootMargin: "40%",
    threshold: 1,
  });

  aboutIntersection && aboutIntersection.intersectionRatio < 1
    ? bgNotActive(about.current)
    : bgActive(about.current);

  return (
    <section className="about-container" id="o-nas" ref={about}>
      <div className="left"></div>
      <div className="right">
        <div className="about-title">
          <h2 className="section-title">O nas</h2>
          <div class="rect rect1"></div>
          <div class="rect rect2"></div>
        </div>
        <p className="section-content">
          Działalność firmy rozpoczęła się w 2008 roku. Zostaliśmy wpisani do
          ewidencji gospodarczej w Gminie Bytom w zakresie projektowania i
          budowy sieci telekomunikacyjnej. Głównym przedmiotem działalności
          firmy jest budowa linii światłowodowych. Firma swoją pracę opiera na
          doświadczonej kadrze pracowników oraz nowoczesnej technologii i
          sprzęcie. Staż kadry kierowniczej oscyluje w 15 letnie doświadczenie w
          dziedzinie telekomunikacji. Każdy z pracowników posiada niezbędne
          umiejętności do realizacji inwestycji w branży światłowodowej. Swoją
          ofertę kierujemy zarówno do Klientów indywidualnych, firm oraz
          przedsiębiorstw.
        </p>
      </div>
    </section>
  );
};

export default About;
