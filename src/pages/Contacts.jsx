import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import ContactUsForm from '../components/Contacts/ContactUsForm';
import ContactMethods from '../components/Contacts/ContactMethods';

import '../css/contact/contacts.scss';

export default function Contacts() {
    return (
        <div className="contacts">
            <Header/>
            <p className="title">Կապ հաստատեք մեզ հետ</p>
            <div className="mid-content">
                <ContactUsForm/>
                <ContactMethods/>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195198.57423071956!2d44.44543319049504!3d40.14277996566306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd65202aaa07%3A0x7378233aa9af00ce!2sS%20Design%20Studio!5e0!3m2!1shy!2s!4v1626047866584!5m2!1shy!2s" loading="lazy" title="sdesign map"></iframe>
            <Footer/>
        </div>
    )
}
