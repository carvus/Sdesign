import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/home/footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-contacts">

                    <p className="info-1-column-item">ՀՀ,0033 ք, Երևան Գյուլբենկյան 31</p>
                    <img className="icon-column-item" src="images/home/icons/footer-icons/location.png" alt="" />
                    <p className="info-2-column-item">ՀՀ,4001 ք, Իջևան Վասիլյան 2/2</p>

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
                    <h3>Մենք կատարում ենք</h3>
                    <ul>
                        <li>ԴԻԶԱՅՆ</li>
                        <li>ՎԱՀԱՆԱԿՆԵՐ</li>
                        <li>ԼԱՅՆԱՖՈՐՄԱՏ ՏՊԱԳՐՈՒԹՅՈՒՆ</li>
                        <li>ՑՈՒՑԱՆԱԿՆԵՐ</li>
                        <li>ԾԱՎԱԼԱՅԻՆ ՏԱՌԵՐ</li>
                        <li> 3D ՓՈՐԱԳՐՈՒԹՅՈՒՆ</li>
                        <li>ԻՆՏԵՐԻԵՐԻ և ԷՔՍՏԵՐԻԵՐԻ ԴԻԶԱՅՆ</li>
                        <li>ԼԱԶԵՐԱՅԻՆ և ՖՐԵԶԵՐԱՅԻՆ ԱՇԽԱՏԱՆՔՆԵՐ</li>
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
