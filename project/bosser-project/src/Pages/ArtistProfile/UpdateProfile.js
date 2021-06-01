
import React, {Component} from 'react';
import firebase, {auth, db, storage} from "../../Firebase/firebase";
import Dropzone from 'react-dropzone';

class UpdateProfile extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
            this.setState({files})
        };
        this.state = {
            files: [],
            maxFile:5,
        };
    }
    async componentDidMount() {
        auth.onAuthStateChanged(async user => {
            if (user) {
                this.setState({user:user})
            }
        })
    }



    async upload(files, path)
    {

        if(files!==null && files!==undefined && files.length<=0)
            return;

        var file = files[files.length-1]
        var user = this.state.user
        var metadata = {
            customMetadata: {
                'user': user.uid,
            }
        };

        var storageRef = storage.ref()

        var uploadTask = storageRef.child(path+'/' + file.key).put(file,metadata);


// Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    db.collection("artists").doc( this.state.user.uid).collection(path).add({
                        name: file.key,
                        time: new Date().toLocaleString(),
                        link:downloadURL,
                    }).then(()=>{
                        var newFiles = files.slice(0, files.length-1);
                        console.log("upload end")
                        this.upload(newFiles,path)
                    }).catch((err)=>{
                        storage.refFromURL(downloadURL).delete()
                        var newFiles = files.slice(0, files.length-1);
                        this.upload(newFiles,path)
                    })


                });
            }

        );

    }


    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name}
                {/*{console.log(file)}*/}
            </li>
        ));

        return (
            <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <section className="container" style={{cursor: "pointer"}}>
                        <div {...getRootProps({className: 'dropzone'})}>

                            <div style={{backgroundColor: "#a0a0a0", width: 400, height: 170,textAlign: 'center', padding: '70px 0px 0px 0px'}}>

                                <h2 id="updateTxt">גרור לכאן קבצים להעלאה</h2>
                                <br/>
                                <h2 id="updateTxt">או לחץ כאן</h2>

                                <input {...getInputProps()} />
                            </div>
                        </div>
                        <aside>
                            {
                                files.length <= 0 ?
                                    <h4></h4>:
                                    <div>
                                        {
                                            this.state.maxFile != undefined && files.length > this.state.maxFile?
                                                <h3> מספר הקבצים המקסימלי להעלאה הוא {this.state.maxFile}</h3>:
                                                <div>
                                                    <h2> מספר הקבצים להעלאה - {files.length}</h2>
                                                    <ul>{files}</ul>

                                                    <button style={{padding: 5}} onClick={()=>{
                                                        this.upload(files,'ArtistsPhoto')
                                                    }}><h2>העלה תמונת פרופיל</h2></button>

                                                    <button style={{padding: 5}} onClick={()=>{
                                                        this.upload(files,'GalleryPhotos')
                                                    }}><h2>העלה תמונות גלריה</h2></button>
                                                </div>
                                        }
                                    </div>
                            }
                        </aside>
                    </section>
                )}
            </Dropzone>
        );
    }
}


export default  UpdateProfile;
