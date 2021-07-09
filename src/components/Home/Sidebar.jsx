import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo"></div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="three-lines">
                <img src="images/home/icons/three-lines.png" alt="" />
            </label>
            <nav>
                <ul>
                    <li><Link to="/services" className="sidebar-list-items">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link></li>
                    <li><Link to="/gallery" className="sidebar-list-items">ՏԵՍԱԴԱՐԱՆ</Link></li>
                    <li><Link to="/contacts" className="sidebar-list-items">ԿՈՆՏԱԿՏՆԵՐ</Link></li>
                </ul>
            </nav>
            <div className="contacts-lang">
                <div className="contact-icons">
                    <img src="images/home/icons/facebook.png" alt="" />
                    <img src="images/home/icons/phone.png" alt="" />
                    <img src="images/home/icons/mail.png" alt="" />
                </div>
                <div className="languages" style={{ marginTop: "20px" }}>
                    <span>ARM</span>
                    <span>ENG</span>
                </div>
            </div>
        </div>
    )
}
