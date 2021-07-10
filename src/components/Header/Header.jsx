import React from 'react';
import '../css/header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <img className="header-logo" src="images/bigger-logo2.png" alt="" />
            <div style={{display: "flex"}}>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="three-lines">
                    <img src="images/home/icons/three-lines.png" alt="" />
                </label>
                <div className="languages">
                    <span className="active">ARM</span>
                    <span>ENG</span>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/services" className="navbar-list-items">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link></li>
                        <li><Link to="/gallery" className="navbar-list-items">ՏԵՍԱԴԱՐԱՆ</Link></li>
                        <li><Link to="/contacts" className="navbar-list-items">ԿՈՆՏԱԿՏՆԵՐ</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

