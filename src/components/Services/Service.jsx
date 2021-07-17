import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../css/services/service.scss';

export default function Service({ data, order }) {
    const descriptionDiv = useRef();
    const serviceDiv = useRef();
    const img = useRef();

    useEffect(()=>{
        if ( window.innerWidth <= 375 ) {
            const diffBetweenDescriptionAndImg =  descriptionDiv.current.clientHeight - img.current.clientHeight ;
            serviceDiv.current.style = `margin-bottom: ${diffBetweenDescriptionAndImg+15}px !important;`;
        }
    }, []);

    return (
        <div className={`service service-${order}`} ref={serviceDiv}>
            <img ref={img} src={data.background} style={data.align === "right" ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" } }  alt="" />
            <div className="description" ref={descriptionDiv} >
                <div className="description-content">
                    <h2 className="description-content_title">{data.title}</h2>
                    {data.subTitle && <p className="description-content_text" style={{ textAlign: data.align }}>{data.subTitle}</p>}
                    <p className="description-content_text" style={{ textAlign: data.align }}>{data.weAreDoing}</p>
                    <ul className="description-content_text" style={{ listStyle: !(data.align === "left") ? `url(images/serviceImages/left-arr.png)` : `url(images/serviceImages/right-arr.png)` }}>
                        {data.services.map((el, i) => <li style={{ textAlign: data.align, direction: data.align === "right" && "rtl" }} key={i}>{el}</li>)}
                    </ul>
                </div>
                <Link to="/gallery"><button className="seemore-btn">ԾԱՆՈԹԱՆԱԼ <span>→</span></button></Link>
            </div>
        </div>
    )
}
