import React, { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GalleryModal from '../components/Gallery/GalleryModal';

import { url } from '../providers/constants.js';
import { request } from '../providers/a.lib.js';

import '../css/gallery/gallery.scss';

export default function Gallery() {
    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        getProjects();
    }, []);
    async function getProjects() {
        try {
            const projects = await request("GET", url + "/projects")
            setProjectsData(projects)
        }
        catch (err) {
            console.log(err);
        }
    }

    const data = [
        {
            sectionTitle: "ԴԻԶԱՅՆ",
            images: [
                {
                    url: "images/gallery/everest.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/brunch.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/ritox.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/vanardi.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/marifos.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/everest.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
            ],
        },
        {
            sectionTitle: "ԱՐՏԱՔԻՆ ԳՈՎԱԶԴ",
            images: [
                {
                    url: "images/gallery/brunch.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/ritox.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/vanardi.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/marifos.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/everest.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
                {
                    url: "images/gallery/brunch.png",
                    modalImage: "images/gallery/everestDesign/everestDesign1.png"
                },
            ],
        }
    ];

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    function openModal(imgUrl) {
        setIsOpenModal(true);
        setModalImg(imgUrl);
    }
    return (
        <div className="gallery">
            <Header />
            <div className="gallery-sections">
                {data.map((el, i) => {
                    const sectionClass = `section section${i+1}`
                    return <div className={sectionClass} key={i}>
                        <h2>{el.sectionTitle}</h2>
                        <div className="gallery-images">
                            {el.images.map((el, i) =>
                                <div className="project" key={i}>
                                    <img src={el.url} alt="" />
                                    <div className="project-name" onClick={() => openModal(el.modalImage)}>
                                        <p>Everest</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                })}
            </div>
            <Footer />
            {isOpenModal && <GalleryModal modalImg={modalImg} onClose={() => setIsOpenModal(false)} openModal={openModal} />}
        </div>
    )
}