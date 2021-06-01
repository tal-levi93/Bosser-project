

import React, { useState } from 'react';

import ImageGrid from "../../components/GalleryImages/ImageGrid";
import UploadForm from "../../components/GalleryImages/UploadForm";
import Modal from "../../components/GalleryImages/Modal";
import './gallery.css'
import {FaSearch} from "react-icons/fa";

function Gallery(){

// class Gallery extends Component{


    // constructor(props) {
    //     super(props);
    //
    // }
    // render() {
        const [selectedImg, setSelectedImg] = useState(null);
        return(
            <div>

                <div id={'title'}>הגלריה שלנו</div>
                <br/>
                <div id={'information'}> לחץ על תמונה להגדלה <FaSearch/></div>

                {/*for Admin Only*/}
                <UploadForm />

                <ImageGrid setSelectedImg={setSelectedImg} />
                { selectedImg && (
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                )}
            </div>
        )
    }
// }

export default Gallery;

