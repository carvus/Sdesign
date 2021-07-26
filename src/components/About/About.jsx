import React from 'react';
import '../../css/about.scss';
import { withI18n } from 'react-i18next';

function About({t}) {
    return (
        <div className="about"> 
            <div className="about-us-text">
                <h2>{t("mer-masin")}</h2>
                <p>{t("mer-masin-text")}</p>
            </div>
        </div>
    )
}

export default withI18n()(About);
