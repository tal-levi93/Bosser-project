

import react, { useState } from 'react';

import ImageGrid from "../../components/GalleryImages/ImageGrid";
import UploadForm from "../../components/GalleryImages/UploadForm";
import Modal from "../../components/GalleryImages/Modal";
import './gallery.css'

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
                <h1>גלריה</h1>

                {/*for Admin*/}
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