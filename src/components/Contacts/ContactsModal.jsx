import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/contact/contactModal.scss';

export default function ContactsModal({ info}) {
    return ReactDOM.createPortal(
        <div className="contacts-modal-wrapper">
            <div className="contacts-modal">
                <p className="contacts-modal-text">{info.text}</p>
                <img src={info.img} alt="" />
            </div>
        </div>,
        document.getElementById("portal")
    )
}
