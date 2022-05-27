import React, { useRef } from "react";
import "./services.css";
import icon1 from "../../Imgs/ServicesIcons/kabel_sieci_telekomunikacyjnej.png";
import icon2 from "../../Imgs/ServicesIcons/kabel_optotelekominikacyjny.png";
import icon3 from "../../Imgs/ServicesIcons/urzadzenie_transmicji_cyfrowej.png";
import icon4 from "../../Imgs/ServicesIcons/kanalizacja_wtórna.png";
import icon5 from "../../Imgs/ServicesIcons/rurociagi_kablowe.png";
import icon6 from "../../Imgs/ServicesIcons/kanalizacja_pierwotna.png";
import icon7 from "../../Imgs/ServicesIcons/doradztwo_techniczne.png";
import icon8 from "../../Imgs/ServicesIcons/inwestycja.png";
import icon9 from "../../Imgs/ServicesIcons/portfolio.png";
import { useIntersection } from "react-use";
import Service from "./Service";

const Services = ({ bgNotActive, bgActive }) => {
  const services = useRef(null);

  const servicesIntersection = useIntersection(services, {
    root: null,
    rootMargin: "40%",
    threshold: 1,
  });

  servicesIntersection && servicesIntersection.intersectionRatio < 1
    ? bgNotActive(services.current)
    : bgActive(services.current);

  return (
    <section className="offer-container" id="nasze-uslugi" ref={services}>
      <div className="offer-title">
        <h2 className="section-title">Nasze usługi</h2>
        <div className="rect rect1"></div>
        <div className="rect rect2"></div>
      </div>
      <div className="icons-container">
        <Service src={icon1}>Budowa kabli sieci telekomunikacyjnych</Service>
        <Service src={icon2}>Budowa kabli optotelekomunikacyjnych</Service>
        <Service src={icon3}>Montaż i konserwacja central i urządzeń transmisyjnych cyfrowych i analogowych</Service>
        <Service src={icon4}>Budowa kanalizacji wtórnej dla linii optotelekomunikacyjnych</Service>
        <Service src={icon5}>Budowa rurociągów kablowych dla linii optotelekomunikacyjnych</Service>
        <Service src={icon6}>Budowa kanalizacji pierwotnej</Service>
        <Service src={icon7}>Doradztwo techniczne związane z sieciami teletechnicznymi</Service>
        <Service src={icon8}>Nadzory inwestorskie nad realizacją zadań teletechnicznych</Service>
        <Service src={icon9}>Oferujemy obsługę formalnoprawną oraz projekty do wymienionych zadań</Service>
      </div>
    </section>
  );
};

export default Services;
