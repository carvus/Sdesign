import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../css/slider.scss';

export default function GalleryModalSlider(props) {
    return (
        <div className="gallery-modal">
            <AwesomeSlider bullets={false}>
                <div className="gallery-slide">
                    <img className="gallery-image" src="images/gallery/everest.png" alt="" />
                    <img className="gallery-image" src="images/gallery/brunch.png" alt="" />
                    <img className="gallery-image" src="images/gallery/ritox.png" alt="" />
                </div>
                <div className="gallery-slide">
                    <img className="gallery-image" src="images/gallery/everest.png" alt="" />
                    <img className="gallery-image" src="images/gallery/vanardi.png" alt="" />
                    <img className="gallery-image" src="images/gallery/marifos.png" alt="" />
                </div>
                <div className="gallery-slide">
                    <img className="gallery-image" src="images/gallery/brunch.png" alt="" />
                    <img className="gallery-image" src="images/gallery/ritox.png" alt="" />
                    <img className="gallery-image" src="images/gallery/vanardi.png" alt="" />
                </div>
            </AwesomeSlider>
        </div>
    )
}
