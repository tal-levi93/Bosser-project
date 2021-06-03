import React, { useEffect } from 'react';
import AddImageToStorage from "../AddImageToStorage";
// import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import "./style.css"

const BlogProgressBar = ({ file, setFile , setUrl }) => {
    const { progress, url } = AddImageToStorage(file);

    useEffect(() => {
        if (url) {
            setUrl(url)
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default BlogProgressBar;