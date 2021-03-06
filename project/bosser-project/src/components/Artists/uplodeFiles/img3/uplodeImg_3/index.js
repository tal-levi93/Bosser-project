import React, { useState } from 'react';
import BlogProgressBar from '../../../../Blog/BlogProgressBar';
import {auth, db} from "../../../../../Firebase/firebase";
import ArtistImg3ProgressBar from "../../img3/progressBarArtistImg3";

const UploadImage3 = (props) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url , setUrl] = useState("");

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('בחר קובץ (png or jpg)');
        }
    };

    const handleUrl = (e)=>{
        props.SetUrl(e)
    }

    return (
        <div id={"gform"}>
            <label id={"glabel"}>
                <input id={"ginput"} type="file" onChange={handleChange} />
                <span id={"gspan"} >+</span>
            </label>
            <div className="goutput">
                { error && <div className="error">{ error }</div>}
                { file && <div> מעלה את הקובץ: { file.name }</div> }
                { file && <ArtistImg3ProgressBar file={file} setFile={setFile}  setUrl = {handleUrl} ArtistId={props.user_id} /> }
            </div>
        </div>
    );
}

export default UploadImage3;