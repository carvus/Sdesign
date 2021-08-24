import React, { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Project from '../components/Gallery/Project';
import GalleryModal from '../components/Gallery/GalleryModal';

import { getProjects } from '../providers/requests.js';

import '../css/gallery/gallery.scss';

export default function Gallery() {
    const [projectsData, setProjectsData] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [ otherItems, setOtherItems ] = useState([]);

    const [ designItems, setDesignItems ] = useState([]);
    const [ advertismentItems, setAdvertismentItems ] = useState([]);
    const [ printItems, setPrintItems ] = useState([]);
    const [ poragrutyumItems, setPoragrutyunItems ] = useState([]);

    useEffect( () => {
        getProjects(setProjectsData); 
        return () => {
            document.body.classList.remove("no-scroll");
        }
    }, []);

    const openModal = (imgUrl, otherItems) => {
        setIsOpenModal(true);
        setModalImg(imgUrl);
        setOtherItems( otherItems );
        window.scrollTo(0, 0);
        document.body.classList.add("no-scroll");
    }

    useEffect( ()=> {
        if ( projectsData ) {
            setDesignItems(  projectsData.data.items.filter(el=> el[`project-type`] === 1 ) );
            setAdvertismentItems(  projectsData.data.items.filter(el=> el[`project-type`] === 2 ) );
            setPrintItems(  projectsData.data.items.filter(el=> el[`project-type`] === 3 ) );
            setPoragrutyunItems(  projectsData.data.items.filter(el=> el[`project-type`] === 4 ) );
        }
    }, [ projectsData ] )

    return (
        <div className="gallery">
            <Header isHeaderHidden={document.body.offsetWidth <= 768 && isOpenModal ? -1 : 1} />
            <div className="gallery-sections">
                { designItems.length > 0 && <Project title="ԴԻԶԱՅՆ" items={designItems} openModal={openModal} />}
                { advertismentItems.length > 0 && <Project title="ԱՐՏԱՔԻՆ ԳՈՎԱԶԴ" items={advertismentItems} openModal={openModal} />}
                { printItems.length > 0 && <Project title="ՏՊԱԳՐՈՒԹՅՈՒՆ" items={printItems} openModal={openModal} />}
                { poragrutyumItems.length > 0 && <Project title="ԼԱԶԵՐԱՅԻՆ ԵՎ ՖՐԵԶԵՐԱՅԻՆ ՓՈՐԱԳՐՈՒԹՅՈՒՆ" items={poragrutyumItems} openModal={openModal} />}
            </div>
            <Footer />
            {isOpenModal && <GalleryModal imgs={projectsData && projectsData.data.items} otherItems={ otherItems } modalImg={modalImg} onClose={() => setIsOpenModal(false)} openModal={openModal} />}
        </div>
    )
}