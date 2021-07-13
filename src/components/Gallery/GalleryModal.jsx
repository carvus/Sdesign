import React from 'react';
import '../css/gallery/galleryModal.scss';
import GalleryModalSlider from './GalleryModalSlider';

export default function GalleryModal(props) {
    return (
        <div className="gallery-modal-wrapper"> 
        <img className="close-modal-btn" onClick={props.onClose} src="images/gallery/modalclose.png" alt="" />
            <div className="modal"> 
                <img src={props.modalImg} alt=""  />
                <GalleryModalSlider openModal={props.openModal} url={props.modalImg}/>
            </div>
        </div>
    )
}
