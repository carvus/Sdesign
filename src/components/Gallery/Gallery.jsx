import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Home/Footer/Footer';
import GalleryModal from './GalleryModal';
import '../css/gallery/gallery.scss';

export default function Gallery() {
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
    ]
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalImg, setModalImg] = useState("")
    function openModal(imgUrl) {
        setIsOpenModal(true)
        setModalImg(imgUrl)
    }
    return (
        <div className="gallery">
            <Header />
            <div className="gallery-sections">
                {data.map((el, i) => {
                    return <div className="section" key={i}>
                        <h2>{el.sectionTitle}</h2>
                        <div className="gallery-images">
                            {el.images.map((el, i) => <img onClick={() => openModal(el.modalImage)} src={el.url} key={i} alt=""/>)}
                        </div>
                    </div>
                })}
            </div>
            <Footer />
            {isOpenModal && <GalleryModal modalImg={modalImg} onClose={() => setIsOpenModal(false)} openModal={openModal} />}
        </div>
    )
}
