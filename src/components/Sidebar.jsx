import React, { useState } from "react";
import { withI18n } from "react-i18next";
import { Link } from "react-router-dom";
import "../css/home/sidebar.scss";

function Sidebar({ t, i18n }) {
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  const [currentLang, setCurrentLang] = useState('hy');
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="three-lines">
        <img src="images/home/icons/three-lines.png" alt="" />
      </label>
      <div className="sidebar-menu">
        <nav>
          <ul>
            <li>
              <Link to="/services" className="sidebar-list-items">
                {t("tsarayutyunner")}
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="sidebar-list-items">
                {t("tesadaran")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="sidebar-list-items">
                {t("kontaktner")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="contacts-lang">
          <div className="contact-icons">
            <a href="https://www.facebook.com/yerevanSdesign" target="blank">
              <img src="images/home/icons/facebook.png" alt="" />
            </a>
            <Link to="/contacts">
              <img src="images/home/icons/phone.png" alt="" />
            </Link>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrjFBldJbjTzvvWsNWkfnpwHvLRcTcMGZnRvcJlwmMdfkgrsWJvJfqKvNbgTnqLstgXbTg"
              target="blank"
            >
              <img src="images/home/icons/mail.png" alt="" />
            </a>
          </div>
          <div className="languages" style={{ marginTop: "20px" }}>
            <span className={`${currentLang !== `en` ? `active` : ``}`}
              onClick={() => {
                changeLanguage(`hy`)
                setCurrentLang(`hy`)
              }}>
              ARM
            </span>
            <span className={`${currentLang === `en` ? `active` : ``}`}
              onClick={() => {
                changeLanguage(`en`)
                setCurrentLang(`en`)
              }}>
              ENG
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withI18n()(Sidebar);
