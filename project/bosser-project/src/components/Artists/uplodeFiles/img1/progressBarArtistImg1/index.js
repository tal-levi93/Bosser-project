import React, { useEffect } from 'react';
import AddImageToStorage from "../../../../Blog/AddImageToStorage";
// import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import {auth, db} from "../../../../../Firebase/firebase";

const ArtistImg1ProgressBar = ({ file, setFile , setUrl , ArtistId}) => {
    const { progress, url } = AddImageToStorage(file);
    useEffect(() => {
        if (url) {
            setUrl(url)
            setFile(null);
            db.collection('artists').doc(ArtistId).update({
                    image_1: url
                }
            ).then( r => {})
        }

    }, [url, setFile]);

    return (

        <motion.div className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ArtistImg1ProgressBar;