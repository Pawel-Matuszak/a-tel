import React, {useEffect, useState, Component} from "react";
import "./Header.css";
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
function Header (){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
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
                    <ul className={click ? "nav-links" : "nav-links active"}>
                        <li><a href="#" onClick={handleClick}>Strona główna</a></li>
                        <li><a href="#" onClick={handleClick}>Nasze usługi</a></li>
                        <li><a href="#about" onClick={handleClick}>O nas</a></li>
                        <li><a href="#references" onClick={handleClick}>Referencje</a></li>
                        <li><a href="#equipment" onClick={handleClick}>Nasz sprzęt</a></li>
                        <li><a href="#contact" onClick={handleClick}>Kontakt</a></li>
                    </ul>
                    <div onClick={handleClick} className="hamburger-menu"><FontAwesomeIcon className="fontAwesomeIcon hamburger-menu" icon={click ? faBars : faTimes}/></div>
                </div>
            </div>
        </header>
        
    )
};
export default Header