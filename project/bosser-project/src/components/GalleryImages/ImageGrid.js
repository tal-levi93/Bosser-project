
import React from 'react';
import useFirestore from "../../hooks/useFirestore";
// import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('gallery');

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}s
                            onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
