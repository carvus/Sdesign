import React, { useState } from 'react';

import { postContactFormData } from '../../providers/requests';
import Loading from './Loading';

import '../../css/contact/contactForm.scss';


export default function ContactUsForm({ setIsOpenModal, setModalInfo }) {
    const [isLoaderOpen, setIsLoaderOpen] = useState(false)
    const submitMessage = async (e) => {
        e.preventDefault()
        const formElements = e.target.elements;
        const formData = {
            "sender-name": formElements.username ? formElements.username.value : "",
            "sender-email": formElements.email ? formElements.email.value : "",
            "content": formElements.msg ? formElements.msg.value : ""
        }
        try {
            setIsLoaderOpen(true)
            await postContactFormData(formData);
            setIsLoaderOpen(false)
            setIsOpenModal(true)
            setTimeout(() => {
                setIsOpenModal(false)
                document.body.classList.remove("no-scroll");
            }, 2000)
            setModalInfo(
                {
                    text: "Ուղարկված է:",
                    img: "images/confirmation 1.png"
                });
        } catch (err) {
            setIsLoaderOpen(false)
            setIsOpenModal(true)
            setTimeout(() => {
                setIsOpenModal(false)
                document.body.classList.remove("no-scroll");
            }, 2000)
            setModalInfo(
                {
                    text: "Ինչ որ բան այնպես չէ:",
                    img: "images/red-x.png"
                });

        };
        document.body.classList.add("no-scroll")
        window.scrollTo(0,0)
    }

    return (
        <>
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
                <button className="submit-btn">Ուղարկել<span> →</span></button>
            </form>
            {isLoaderOpen && <Loading />}
        </>
    )
}
