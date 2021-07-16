import React, {useEffect, useState} from "react";
import { NavHashLink } from 'react-router-hash-link';
import "./Header.css";
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Header (){
    const [header, setHeader] = useState(false);
    const changebackground = () => {
        if(window.scrollY >= 80){
            setHeader(true);
        }else{
            setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changebackground);
        return () => {
            window.removeEventListener('scroll', changebackground);
        }
    }, [])

    return (
        <header className={header ? 'header active' : 'header' }>
            <div className="header-container">
                <div className="nav">
                    <div className="logo">
                    <a href=""><img src={logo} alt=""/></a>
                    </div>
                    <ul className="nav-links">
                        <li><NavHashLink activeClassName="nav-link-selected" smooth to="#">Strona główna</NavHashLink></li>
                        <li><NavHashLink activeClassName="nav-link-selected" smooth to="#">Nasze usługi</NavHashLink></li>
                        <li><NavHashLink activeClassName="nav-link-selected" smooth to="#about">O nas</NavHashLink></li>
                        <li><NavHashLink activeClassName="nav-link-selected" smooth to="#references">Referencje</NavHashLink></li>
                        <li><NavHashLink activeClassName="nav-link-selected" smooth to="#equipment">Nasz sprzęt</NavHashLink></li>
                        <li><NavHashLink activeClassName="nav-link-selected" smooth to="#contact">Kontakt</NavHashLink></li>
                    </ul>
                    <li><a href="#" className="hamburger-menu"><FontAwesomeIcon icon={faBars} /></a></li>
                </div>
            </div>
        </header>
    )
};
export default Header