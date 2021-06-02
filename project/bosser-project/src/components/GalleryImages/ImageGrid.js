
import React from 'react';
import useFirestore from "../../hooks/useFirestore";
// import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import deleteDoc from '../../hooks/deleteDoc'
import { FaTrashAlt } from "react-icons/fa";

// const admin_logged_in = (doc) =>{
//     if(props.UserDetails.IsAdmin)
//     return(
//         // For admin only
//         <button  id={'delete'} style={{color:'white'}} onClick={() => { deleteDoc(doc,'gallery')}} >
//             <FaTrashAlt/></button>
//     )
//     else return(<div></div>)
// }


const ImageGrid = (props) => {

    const { docs } = useFirestore('gallery');

    const admin_logged_in = (doc) =>{
        if(props.UserDetails.IsAdmin)
            return(
                <button  id={'delete'} style={{color:'white'}} onClick={() => { deleteDoc(doc,'gallery')}} >
                    <FaTrashAlt/></button>
            )
        else return(<div></div>)
}

    return(


        <div className="img-grid">

            {docs && docs.map(doc => (
                <div key={doc.id}>

                    {admin_logged_in(doc)}

                <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}s
                            onClick={() => props.setSelectedImg(doc.url)}
                >

                    <motion.img src={doc.url} alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                    />



                </motion.div>
                </div>


            ))}

        </div>
    )
}

export default ImageGrid;
