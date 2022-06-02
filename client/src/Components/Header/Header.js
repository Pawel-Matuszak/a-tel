import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./header.css";
import logo from "../../Imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [click, setClick] = useState(true);
  const [header, setHeader] = useState(false);

  const handleClick = () => setClick(!click);
  const changebackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changebackground);
    return () => {
      window.removeEventListener("scroll", changebackground);
    };
  }, []);
  return (
    <header className={header ? "header active" : "header"}>
      <div className="header-container">
        <div className="nav">
          <div className="logo">
            <NavHashLink smooth to="/#">
              <img src={logo} alt="a-tel logo" />
            </NavHashLink>
          </div>
          <ul className={click ? "nav-links" : "nav-links active"}>
            <li onClick={handleClick}>
              <NavHashLink smooth to="/#">
                Strona główna
              </NavHashLink>
            </li>
            <li onClick={handleClick}>
              <NavHashLink smooth to="/#nasze-uslugi">
                Nasze usługi
              </NavHashLink>
            </li>
            <li onClick={handleClick}>
              <NavHashLink smooth to="/#o-nas">
                O nas
              </NavHashLink>
            </li>
            <li onClick={handleClick}>
              <NavHashLink smooth to="/#referencje">
                Referencje
              </NavHashLink>
            </li>
            <li onClick={handleClick}>
              <NavHashLink smooth to="/#nasz-sprzet">
                Nasz sprzęt
              </NavHashLink>
            </li>
            <li onClick={handleClick}>
              <NavHashLink smooth to="/#kontakt">
                Kontakt
              </NavHashLink>
            </li>
          </ul>
          <div onClick={handleClick} className="hamburger-menu">
            <FontAwesomeIcon
              className="fontAwesomeIcon hamburger-menu"
              icon={click ? faBars : faTimes}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
