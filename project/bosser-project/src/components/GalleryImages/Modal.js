import react from 'react';
import { motion } from 'framer-motion';
import {db} from '../../Firebase/firebase';
import useFirestore from "../../hooks/useFirestore";



const Modal = ({ setSelectedImg, selectedImg }) => {

    const { docs } = useFirestore('images');
    const data = db.collection('gallery');

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <>

        <motion.div className="backdrop" onClick={handleClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
        >
            <div id={'close'}>לחץ על המסך לסגירה</div>
            <motion.img src={selectedImg} alt="enlarged pic"
                        initial={{ y: "-100vh" } }
                        animate={{ y: 0 }}
            />


        </motion.div>



    </>
    )
}

export default Modal;