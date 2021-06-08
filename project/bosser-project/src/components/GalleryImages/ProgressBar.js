import react, { useEffect } from 'react';
import React, { Component }  from 'react';
import useStorage from "../../hooks/useStorage";
import { motion } from 'framer-motion';


/* When the admin upload some image to gallery, the progressbar will show up for feedback */
const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        /* The progressbar will have animation - this is how the admin can see the process */
        <motion.div className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ProgressBar;