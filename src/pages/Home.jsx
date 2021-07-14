import React from 'react';
import Sidebar from '../components/Sidebar';
import CoverPage from '../components/CoverPage';
import Services from '../components/OurServices/OurServices.jsx';
import About from '../components/About/About.jsx';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';

import '../css/home/home.scss';

export default function Home() {
    return (
        <div className="main">
            <div className="home">
                <Sidebar/>
                <CoverPage/>
            </div>
            <Services/>
            <About/>
            <Partners/>
            <Footer />
        </div>
    )
}
