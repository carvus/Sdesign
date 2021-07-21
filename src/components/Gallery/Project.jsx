import React from 'react'
import { GET_IMAGE } from '../../providers/a.lib'

export default function Project({ title, openModal, items }) {
    return (
        <div className="section">
            <h2>{title}</h2>
            <div className="gallery-images">
                {
                    items && items.map( (el, i) => (
                        <div className="project" key={i}>
                            <div className="project-name" onClick={() => openModal(GET_IMAGE(el["cover-img"]))}>
                                <p>{el["title-en"]}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
