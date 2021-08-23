import React, { useState } from "react";
import "../../css/header.scss";
import { Link } from "react-router-dom";
import { withI18n } from "react-i18next";

function Header({ t, i18n }, props) {
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  }
  const [currentLang, setCurrentLang] = useState("hy");
  return (
    <div className="header" style={{ zIndex: props.isHeaderHidden }}>
      <Link to="/home">
        <img className="header-logo" src="images/bigger-logo2.png" alt="" />
      </Link>
      <div style={{ display: "flex" }}>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="three-lines">
          <img src="images/home/icons/three-lines.png" alt="" />
        </label>
        <div className="languages">
          <span
            onClick={() => changeLanguage(`hy`)}
            className={`${currentLang === `hy` ? `active` : ``}`}
          >
            ARM
          </span>
          <span
            onClick={() => changeLanguage(`en`)}
            className={`${currentLang !== `hy` ? `active` : ``}`}
          >
            ENG
          </span>
        </div>
        <div className="header-topbar-menu">
          <nav>
            <ul>
              <li>
                <Link to="/services" className="navbar-list-items">
                  {t("tsarayutyunner")}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="navbar-list-items">
                  {t("tesadaran")}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="navbar-list-items">
                  {t("kontaktner")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-topbar-menu-languages">
            <span
              onClick={() => changeLanguage(`hy`)}
              className={`${currentLang === `hy` ? `active` : ``}`}
            >
              ARM
            </span>
            <span
              onClick={() => changeLanguage(`en`)}
              className={`${currentLang !== `hy` ? `active` : ``}`}
            >
              ENG
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withI18n()(Header);
