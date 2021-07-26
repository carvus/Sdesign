import React from 'react';
import { withI18n } from "react-i18next";


function Services({t}) {
    return (
        <div className="services">
            <div className="des-service">
                <img src="images/home/services/design.png" alt="" />
                <p>{t("dizayn")}</p>
            </div>
            <div className="des-service">
                <img src="images/home/services/advertisement.png" alt="" />
                <p>{t("artaqin-govazd")}</p>
            </div>
            <div className="des-service">
                <img src="images/home/services/printing.png" alt="" />
                <p>{t("tpagrutyun")}</p>
            </div>
            <div className="des-service">
                <img src="images/home/services/engraving.png" alt="" />
                <p>{t("lazerayin-tpagrutyun")}</p>
            </div>
        </div>
    )
}

export default withI18n()(Services);
