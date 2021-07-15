import React, {useState} from "react";
import "./Header.css";
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Header (){
const [header, setHeader] = useState(false);
const changebackground = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 80){
        setHeader(true);
    }else{
        setHeader(false);
    }
};
window.addEventListener('scroll', changebackground);
    return (
        <header className={header ? 'header active' : 'header' }>
            <div className="header-container">
                <div className="nav">
                    <div className="logo">
                    <a href=""><img src={logo} alt=""/></a>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#">Strona główna</a></li>
                        <li><a href="#about">O nas</a></li>
                        <li><a href="#references">Referencje</a></li>
                        <li><a href="#equipment">Nasz sprzęt</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                    <li><a href="#" className="hamburger-menu"><FontAwesomeIcon icon={faBars} /></a></li>
                </div>
            </div>
        </header>
    )
};
export default Header