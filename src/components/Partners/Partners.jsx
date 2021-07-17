import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';

import { getPartners } from '../../providers/requests';
import { GET_IMAGE } from '../../providers/a.lib';

import '../../css/home/partners.scss';
import '../../css/slider.scss';

export default function Partners() {
    const [partnersData, setPartnersData] = useState(null);
    useEffect(() => {
        getPartners(setPartnersData)
    }, [])
    console.log(partnersData);
    return (
        <div className="partners-slider">
            <h2>ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
            <AwesomeSlider organicArrows={false}>
                <div className="slide">
                    {partnersData && partnersData.data.items.map((el,i)=> <img src={GET_IMAGE(el.img)} key={i} alt="" className="partners-logo"/>)}
                </div>
            </AwesomeSlider>
        </div>
    )
}
