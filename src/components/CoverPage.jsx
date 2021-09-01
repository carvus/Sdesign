import React from 'react'
import { Link } from 'react-router-dom'

export default function CoverPage() {
    return (
        <div className="cover-page">
            <Link to="/gallery"><button className="prt-btn">VIEW PORTFOLIO</button></Link>
        </div> 
    )
}
