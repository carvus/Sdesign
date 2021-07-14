import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';

import { request } from '../../providers/a.lib.js';
import { url } from '../../providers/constants.js';

import 'react-awesome-slider/dist/styles.css';

import '../../css/home/partners.scss';
import '../../css/slider.scss';

export default function Partners() {
    const [partnersData, setPartnersData] = useState([]);
    useEffect(() => {
        getPartners()
    }, [])
    async function getPartners() {
        try {
            const partners = await request("GET", url + "/partners")
            setPartnersData(partners)
        }
        catch (err) {
            console.log(err);
        }
    }
    console.log(partnersData);
    return (
        <div className="partners-slider">
            <h2>ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
            <AwesomeSlider organicArrows={false}>
                <div className="slide">
                    <img className="partners-logo" src="images/home/partners/idbank.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/aebbank.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/sosvilages.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/maple.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/ey.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/sp.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/fibo.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/nest.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/amolimp.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/idram.png" alt="" />
                </div>
                <div className="slide">
                    <img className="partners-logo" src="images/home/partners/idbank.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/aebbank.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/sosvilages.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/maple.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/ey.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/sp.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/fibo.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/nest.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/amolimp.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/idram.png" alt="" />
                </div>
                <div className="slide">
                    <img className="partners-logo" src="images/home/partners/idbank.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/aebbank.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/sosvilages.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/maple.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/ey.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/sp.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/fibo.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/nest.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/amolimp.png" alt="" />
                    <img className="partners-logo" src="images/home/partners/idram.png" alt="" />
                </div>
            </AwesomeSlider>
        </div>
    )
}
