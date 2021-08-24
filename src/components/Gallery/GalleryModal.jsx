import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/gallery/galleryModal.scss';
import GalleryModalSlider from './GalleryModalSlider';

export default function GalleryModal(props) {

    function closeModal(){
        props.onClose();
        document.body.classList.remove("no-scroll")
    }

    return ReactDOM.createPortal(
        <div className="gallery-modal-wrapper"> 
        <img className="close-modal-btn" onClick={closeModal} src="images/gallery/modalclose.png" alt="" />
            <div className="modal"> 
                <img className="modal-cover" src={props.modalImg} alt=""  />
                <GalleryModalSlider imgs={props.imgs} openModal={props.openModal} otherItems={ props.otherItems } />
            </div>
        </div>,
        document.getElementById("portal")
    )
}
