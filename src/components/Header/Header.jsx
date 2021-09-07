import React, { useState } from "react";
import "../../css/header.scss";
import { Link, NavLink } from "react-router-dom";
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
            className={`${currentLang === `hy` ? `active-lang` : ``}`}
          >
            ARM
          </span>
          <span
            onClick={() => changeLanguage(`en`)}
            className={`${currentLang !== `hy` ? `active-lang` : ``}`}
          >
            ENG
          </span>
        </div>
        <div className="header-topbar-menu">
          <nav>
            <ul>
              <li>
                <NavLink to="/services" className="navbar-list-items">
                  {t("tsarayutyunner")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="navbar-list-items">
                  {t("tesadaran")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="navbar-list-items">
                  {t("kontaktner")}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default withI18n()(Header);
