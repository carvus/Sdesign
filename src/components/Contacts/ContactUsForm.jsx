import React, { useState } from 'react';
import '../css/contact/contactForm.scss';

export default function ContactUsForm() {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    return (
        <div>
            <form action="" className="contact-form">
                <div className="name-mail">
                    <input type="text"
                        placeholder="Անուն"
                        name="username"
                        id="username"
                        value={userName}
                        onInput={(e)=>setUserName(e.target.value)}
                    />
                    <input type="text"
                        placeholder="Էլ փոստ"
                        name="email" 
                        id="useremail" 
                        value={userEmail}
                        onInput={(e)=>setUserEmail(e.target.value)}
                    />
                </div>
                <textarea name="" id="" cols="71" rows="10"></textarea>
                <button className="submit-btn">Ուղղարկել<span> →</span></button>
            </form>
        </div>
    )
}
