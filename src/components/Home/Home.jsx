import React from 'react';
import Sidebar from './Sidebar';
import CoverPage from './CoverPage';

export default function Home() {
    return (
        <div className="main">
            <div className="home">
                <Sidebar/>
                <CoverPage/>
            </div>
        </div>
    )
}
