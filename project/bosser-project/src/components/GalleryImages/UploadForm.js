import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

/*With this function admin can upload some images to gallery page and update it in firebase  */
const UploadForm = (props) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    /* This is the only types that the upload will confirm*/
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

    if(props.UserDetails.IsAdmin){
        return (
            <form id={"gform"}>
                <label id={"glabel"}>
                    <input id={"ginput"} type="file" onChange={handleChange} />
                    <span id={"gspan"} >+</span>
                </label>
                <div className="goutput">
                    { error && <div className="error">{ error }</div>}
                    { file && <div> מעלה את הקובץ: { file.name }</div> }
                    { file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
            </form>
        );
    }

    return (<div></div>)
}

export default UploadForm;