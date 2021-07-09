import React from 'react';
import Sidebar from './Sidebar';
import CoverPage from './CoverPage';
import Services from './Services/Services.jsx';
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
