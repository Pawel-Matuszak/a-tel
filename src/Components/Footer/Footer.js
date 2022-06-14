import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-conatiner">
        <div className="nav">
          <h2>Przydatne linki</h2>
          <ul className="nav-links">
            <li>
              <NavHashLink smooth to="/#">
                Strona główna
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#nasze-uslugi">
                Nasze usługi
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#o-nas">
                O nas
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#referencje">
                Referencje
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#nasz-sprzet">
                Nasz sprzęt
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#kontakt">
                Kontakt
              </NavHashLink>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2>Kontakt</h2>
          <ul>
            <li>
              <FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt} />
              <span>
                <p>Asystentka:</p>{" "}
                <a href="tel:+48 531 99 83 71">+48 531 99 83 71</a>
              </span>
            </li>
            <li>
              <FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope} />
              <span>
                <p>Asystentka:</p>{" "}
                <a href="mailto:agnieszka.pierzga@a-tel.com.pl">
                  agnieszka.pierzga@a-tel.com.pl
                </a>
              </span>
            </li>
            <li>
              <FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope} />
              <span>
                <p>Biuro:</p>{" "}
                <a href="mailto:biuro@a-tel.com.pl">biuro@a-tel.com.pl</a>
              </span>
            </li>
            <li>
              <FontAwesomeIcon className="fontAwesomeIcon" icon={faHome} />
              <span>
                <a
                  href="https://www.google.com/maps/place/Wolno%C5%9Bci+99,+46-020+Opole/@50.737193,17.9085862,17z/data=!3m1!4b1!4m5!3m4!1s0x471051e63140a8f5:0xe62d534ba8576e6!8m2!3d50.737193!4d17.9107749"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wolności 99, 45-920 Opole
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="about-us">
          <h2>O nas</h2>
          <p>
            Głównym przedmiotem działalności firmy jest budowa linii
            światłowodowych. Firma swoją pracę opiera na doświadczonej kadrze
            pracowników oraz nowoczesnej technologii i sprzęcie. Staż kadry
            kierowniczej oscyluje w 15-letnie doświadczenie w dziedzinie
            telekomunikacji.
          </p>
        </div>
      </div>

      <div className="copyright">
        Copyright &copy; 2021 - A-Tel Andrzej Borzek
      </div>
    </footer>
  );
};

export default Footer;
