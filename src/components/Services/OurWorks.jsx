import React from 'react';
import Service from './Service';

import { withI18n } from 'react-i18next';
import '../../css/services/ourworks.scss';

function OurWorks({ t }) {
    console.log(t)
    const data = [
        {
            title: t("dizayn"),
            background: "images/serviceImages/design.jpg",
            subTitle: t("dizayn-text"),
            weAreDoing: t("Ստեղծում և մշակում ենք ՝ "),
            services: t("service-1-items").split(`|`),
            align: "right"
        },
        { 
            title: t("artaqin-govazd"),
            background: "images/serviceImages/bank.png",
            subTitle: t("service-2-subtitle"),
            weAreDoing: t("Մենք առաջարկում  ենք  լուսային վահանակների , լուսային տառերի, տպագրական բաններների, ցուցանակների  ամբողջական փաթեթ հաճախորդին, այդ  թվում ՝"),
            services: t("service-2-items").split(`|`),
            align: "left"
        },

        {
            title: t("tpagrutyun"),
            background: "images/serviceImages/print.jpg",
            subTitle: t("Թվային  հարթակների  արագ զարգացման փաստը ակնհայտ է, բայց դա չի խանգարում ,  որպեսզի  լայնաֆորմատ և թվային տպագրությունները  մնան ակտուալ մարքետինգային արշավներում ։ Առաջարկում ենք ինչպես լայնաֆորմատ  բաններների, ինքնակպչուն թաղանթների տպագրություն, այնպես էլ  փակցման աշխատանքներ"),
            weAreDoing: t("Կատարում ենք ՝"),
            services: t("service-3-items").split(`|`),
            align: "right"
        },
        {
            title: t("lazerayin-tpagrutyun"),
            background: "images/serviceImages/engraving.png",
            weAreDoing: t("Առաջարկում ենք ֆրեզերային և լազերային հետևյալ ծառայություններ՝"),
            services: t("service-4-items").split(`|`),
            align: "left"
        },

    ]
    return (
        <div className="our-services">
            <div className="heading">
                <h2>{t("mer-arajarkvox-tsarayutyunnery")}</h2>
                <h3>{t("menq-katarumenq")}</h3>
            </div>
            <div className="we-are-doing">
                {data.map((el, i) => <Service data={el} order={i+1} key={i} />)}
            </div>
        </div>
    )
}

export default withI18n()(OurWorks);
