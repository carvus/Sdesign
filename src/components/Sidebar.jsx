import React from "react";
import { Link } from "react-router-dom";
import "../css/home/sidebar.scss";

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
          <li>
            <Link to="/services" className="sidebar-list-items">
              ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="sidebar-list-items">
              ՏԵՍԱԴԱՐԱՆ
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="sidebar-list-items">
              ԿՈՆՏԱԿՏՆԵՐ
            </Link>
          </li>
        </ul>
      </nav>
      <div className="contacts-lang">
        <div className="contact-icons">
          <a href="https://www.facebook.com/yerevanSdesign" target="blank">
            <img src="images/home/icons/facebook.png" alt="" />
          </a>
          <a href="tel:+37498824494">
            <img src="images/home/icons/phone.png" alt="" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrjFBldJbjTzvvWsNWkfnpwHvLRcTcMGZnRvcJlwmMdfkgrsWJvJfqKvNbgTnqLstgXbTg"
            target="blank"
          >
            <img src="images/home/icons/mail.png" alt="" />
          </a>
        </div>
        <div className="languages" style={{ marginTop: "20px" }}>
          <span>ARM</span>
          <span>ENG</span>
        </div>
      </div>
    </div>
  );
}
