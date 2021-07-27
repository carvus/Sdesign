import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
    const data = [
        {
            img: "images/home/services/design.png",
            service: "Դիզայն"
        },
        {
            img: "images/home/services/advertisement.png",
            service: "Արտաքին գովազդ"
        },
        {
            img: "images/home/services/printing.png",
            service: "Տպագրությունզայն"
        },
        {
            img: "images/home/services/engraving.png",
            service: "Լազերային և ֆրեզերային",
            row2: "փորագրություն"
        }
    ]
    return (
        <div className="services">
            {data.map((el, i) => (
                <Link to="/services">
                    <div className="des-service" key={i}>
                        <img src={el.img} alt="" />
                        <p>{el.service}<br />{el.row2 && el.row2}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
