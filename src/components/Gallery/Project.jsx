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
                            <img src={GET_IMAGE(el["img"])} alt="" />
                            <div className="project-name" onClick={() => openModal(GET_IMAGE(el["cover-img"]), items.filter( e => e.id !== el.id ))}>
                                <p>{el["title-en"]}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
