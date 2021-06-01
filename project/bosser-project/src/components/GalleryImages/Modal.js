import react from 'react';
import { motion } from 'framer-motion';
import {db} from '../../Firebase/firebase';
import useFirestore from "../../hooks/useFirestore";
import {FaRegWindowClose} from "react-icons/fa";



const Modal = ({ setSelectedImg, selectedImg }) => {

    const { docs } = useFirestore('images');
    const data = db.collection('gallery');

    const handleClick = (e) => {
        if (document.getElementsByClassName('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <>

        <motion.div className="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
        >
            <button id={'close'} onClick={handleClick}> <FaRegWindowClose/> </button>
            <motion.img src={selectedImg} alt="enlarged pic"
                        initial={{ y: "-100vh" } }
                        animate={{ y: 0 }}
            />


        </motion.div>



    </>
    )
}

export default Modal;