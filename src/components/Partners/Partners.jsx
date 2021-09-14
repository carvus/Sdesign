import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { withI18n } from 'react-i18next';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';

import 'react-awesome-slider/dist/styles.css';

import { getPartners } from '../../providers/requests';
import { GET_IMAGE } from '../../providers/a.lib';

import '../../css/home/partners.scss';
import '../../css/slider.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  speed: 300,
  slidesToScroll: 5,
  variableWidth: true,
  arrows: true
};

function Partners({t}) {
    const [partnersData, setPartnersData] = useState(null);
    useEffect(() => {
        getPartners(setPartnersData)
    }, [])
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const settings = {
      dots: true,
      speed: 300,
      slidesToScroll: isDesktop ? 5 : 2,
      variableWidth: true,
      arrows: true
    };
    return (
        <div className="partners-slider">
            <h2 style={{marginBottom:"80px"}}>{t("mer-gortsnkerner")}</h2>
            <Slider {...settings}>
                {
                  partnersData && partnersData.data?.items?.map((el,i)=>
                    <div className="slide" key={el}>
                      <img style={{marginLeft:"50px"}} 
                        src={GET_IMAGE(el.img)} 
                        key={i} alt="" width="80" height="80" 
                        className="partners-logo"/>
                    </div>
                  )
                }
            </Slider>
        </div>
    )
}

export default withI18n()(Partners);