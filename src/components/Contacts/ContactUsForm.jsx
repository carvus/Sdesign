import React from 'react';
import '../../css/contact/contactForm.scss';

import { postContactFormData } from '../../providers/requests';

export default function ContactUsForm() {

    const submitMessage = (e) => {
        e.preventDefault()
        const formElements = e.target.elements;
        const formData = {
            "sender-name": formElements.username ? formElements.username.value : "",
            "sender-email": formElements.email ? formElements.email.value : "",
            "content": formElements.msg ? formElements.msg.value : ""
        }
        postContactFormData(formData)
    }
    return (
        <form action="" className="contact-form" onSubmit={submitMessage}>
            <div className="name-mail">
                <input type="text"
                    placeholder="Անուն"
                    name="username"
                    id="username"
                />
                <input type="text"
                    placeholder="Էլ փոստ"
                    name="email" 
                    id="useremail" 
                />
            </div>
            <textarea name="msg" id="msg-textarea" rows="10"></textarea>
            <button className="submit-btn">Ուղղարկել<span> →</span></button>
        </form>
    )
}
