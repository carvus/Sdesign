import React from 'react';
import '../css/services/service.scss';

export default function Service({ data }) {
    const right = {
        transform: "translate(3vw, -20vh)",
    }
    const left = {
        transform: "translate(-3vw, -20vh)",
    }
    return (
        <div className="service">
            <img src={data.background} style={data.align === "right" ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" } }  alt="" />
            <div className="description" style={data.align === "left" ? right : left}>
                <h2>{data.title}</h2>
                <p style={{ textAlign: data.align }}>{data.subTitle}</p>
                <p style={{ textAlign: data.align, marginTop: "30px" }}>{data.weAreDoing}</p>
                <ul style={{ listStyle: !(data.align === "left") ? `url(images/serviceImages/left-arr.png)` : `url(images/serviceImages/right-arr.png)` }}>
                    {data.services.map((el, i) => <li style={{ textAlign: data.align, direction: data.align === "right" && "rtl" }} key={i}>{el}</li>)}
                </ul>
            </div>
            <button style={data.align === "right" ? { transform: "translate(-3vw, -17vh)" } : { transform: "translate( 585px , -17vh)" } } className="seemore-btn">ԾԱՆՈԹԱՆԱԼ <span>→</span></button>
        </div>
    )
}
