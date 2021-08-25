import React from 'react';

import { withI18n } from 'react-i18next';

function ContactMethods( { t } ) {
    return (
        <div className="contact-methods">
            <div className="option1 options">
                <div>
                    <img src="images/home/icons/footer-icons/location.png" alt="" />
                    <p>{t(`Գյուլբենկյան 31, Երևան`)}</p>
                </div>
                <div>
                    <img src="images/home/icons/footer-icons/viber.png" alt="" />
                    <p>+37477000992</p>
                </div>
                <div>
                    <img src="images/home/icons/footer-icons/mail.png" alt="" />
                    <p><a className="mail-link" href="mailto:info.sdesignstudio@gmail.com">info.sdesignstudio@gmail.com</a></p>
                </div>
                <div>
                    <img src="images/home/icons/footer-icons/phone.png" alt="" />
                    <p>011 700 992 <br /> 096 23 43 43 </p>
                </div>
            </div>
            <div className="option2 options">
                <div>
                    <img src="images/home/icons/footer-icons/location.png" alt="" />
                    <p>{t(`Վասիլյան 2/2 ք․ Իջևան`)}</p>
                </div>
                <div>
                    <img src="images/home/icons/footer-icons/viber.png" alt="" />
                    <p>+37493050503</p>
                </div>
                <div>
                    <img src="images/home/icons/footer-icons/mail.png" alt="" />
                    <p>sdesign.ijevan@gmail.com</p>
                </div>
                <div>
                    <img src="images/home/icons/footer-icons/phone.png" alt="" />
                    <p>091 713 913</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}


export default withI18n()(ContactMethods);
