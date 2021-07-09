import React from 'react';
import '../css/home.scss';
import Sidebar from './Sidebar';
import CoverPage from './CoverPage';
import Services from './OurServices/OurServices.jsx';
import About from './About/About.jsx';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <div className="main">
            <div className="home">
                <Sidebar/>
                <CoverPage/>
            </div>
                <Services/>
                <About/>
                <Footer />
        </div>
    )
}
