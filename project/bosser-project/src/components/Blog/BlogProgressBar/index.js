import react, { useEffect } from 'react';
import AddImageToStorage from "../AddImageToStorage";
// import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const BlogProgressBar = ({ file, setFile }) => {
    const { progress, url } = AddImageToStorage(file);

    useEffect(() => {
        if (url) {

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