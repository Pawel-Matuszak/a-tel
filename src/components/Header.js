import React from "react";
import "./Header.css";
import logo from "../logo.png";
const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="nav">
                    <div className="logo">
                    <a href=""><img src={logo} alt=""/></a>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#">Strona główna</a></li>
                        <li><a href="#">O nas</a></li>
                        <li><a href="#">Referencje</a></li>
                        <li><a href="#">Nasz sprzęt</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header