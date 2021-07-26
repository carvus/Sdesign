import React from 'react';
import { withI18n } from 'react-i18next';

import '../../css/home/footer.scss';

function Footer({t}) {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-contacts">

                    <p className="info-1-column-item">{t("erevan-hasce")}</p>
                    <img className="icon-column-item" src="images/home/icons/footer-icons/location.png" alt="" />
                    <p className="info-2-column-item">{t("ijevan-hasce")}</p>

                    <p className="info-1-column-item">011 700 992 <br /> 096 23 43 43 </p>
                    <img className="icon-column-item" src="images/home/icons/footer-icons/phone.png" alt="" />
                    <p className="info-2-column-item">091 713 913</p>

                    <p className="info-1-column-item">+37477000992</p>
                    <img className="icon-column-item" src="images/home/icons/footer-icons/viber.png" alt="" />
                    <p className="info-2-column-item">+37493050503</p>

                    <p className="info-1-column-item">info.sdesignstudio@gmail.com</p>
                    <img className="icon-column-item" src="images/home/icons/footer-icons/mail.png" alt="" />
                    <p className="info-2-column-item">sdesign.ijevan@gmail.com</p> 
                </div>
                <div className="our-works">
                    <h3>{t("menq-katarumenq")}</h3>
                    <ul>
                        <li>{t("dizayn")}</li>
                        <li>{t("vahanakner")}</li>
                        <li>{t("laynaformat-tpagrutyun")}</li>
                        <li>{t("cucanakner")}</li>
                        <li>{t("tsavalayin-tarer")}</li>
                        <li>{t("poragrutyun")}</li>
                        <li>{t("int-ext-dizayn")}</li>
                        <li>{t("lazerayin-ashxatanqner")}</li>
                    </ul>
                    <div className="social-media">
                        <a href="https://instagram.com/sdesign.yerevan?utm_medium=copy_link" target="blank"><img src="images/home/icons/footer-icons/instagram.png" alt="" /></a>
                        <a href="https://www.facebook.com/yerevanSdesign" target="blank"><img src="images/home/icons/footer-icons/facebook.png" alt="" /></a>
                        <p>© 2021 Sdesign. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withI18n()(Footer);