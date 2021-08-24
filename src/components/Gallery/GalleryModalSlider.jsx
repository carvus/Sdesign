import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../css/slider.scss';
import { GET_IMAGE } from '../../providers/a.lib';

export default function GalleryModalSlider(props) {
  console.log(props);
    return (
        <div className="gallery-modal">
            <AwesomeSlider bullets={false}>
                { props.otherItems[0] ? <div className="gallery-slide">
                   <img className="gallery-image" src={ GET_IMAGE(props.otherItems[0].img)} alt="" />
                   { props.otherItems[3] ? <img className="gallery-image" src={ GET_IMAGE(props.otherItems[3].img)} alt="" /> : <></> }
                   { props.otherItems[6] ? <img className="gallery-image" src={ GET_IMAGE(props.otherItems[6].img)} alt="" /> : <></> }
                </div>:<></>}
                { props.otherItems[1] ? <div className="gallery-slide">
                   <img className="gallery-image" src={ GET_IMAGE(props.otherItems[1].img)} alt="" />
                   { props.otherItems[4] ? <img className="gallery-image" src={ GET_IMAGE(props.otherItems[4].img)} alt="" /> : <></> }
                   { props.otherItems[7] ? <img className="gallery-image" src={ GET_IMAGE(props.otherItems[7].img)} alt="" /> : <></> }
                </div> :<></> }
                { props.otherItems[2] ? <div className="gallery-slide">
                   <img className="gallery-image" src={ GET_IMAGE(props.otherItems[2].img)} alt="" />
                   { props.otherItems[5] ? <img className="gallery-image" src={ GET_IMAGE(props.otherItems[5].img)} alt="" /> : <></> }
                   { props.otherItems[8] ? <img className="gallery-image" src={ GET_IMAGE(props.otherItems[8].img)} alt="" /> : <></> }
                </div> : <></>}
            </AwesomeSlider>
        </div>
    )
}
