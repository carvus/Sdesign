import React from 'react';
import { Link } from 'react-router-dom'
import { withI18n } from "react-i18next";

function Services({t}) {
    const data = [
        {
            img: "images/home/services/design.png",
            service: "Դիզայն",
            content: t("dizayn")
        },
        {
            img: "images/home/services/advertisement.png",
            service: "Արտաքին գովազդ",
            content: t("artaqin-govazd")
        },
        {
            img: "images/home/services/printing.png",
            service: "Տպագրությունզայն",
            content: t("tpagrutyun")
        },
        {
            img: "images/home/services/engraving.png",
            service: "Լազերային և ֆրեզերային",
            content: t("lazerayin-tpagrutyun")
        }
    ]

    return (
        <div className="services">
            {data.map((el, i) => (
                <Link to="/services">
                    <div className="des-service" key={i}>
                        <img src={el.img} alt="" />
                        <p>{el.content}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default withI18n()(Services);
