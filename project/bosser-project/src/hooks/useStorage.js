import { useState, useEffect } from 'react';
import {firestore,storage,timestamp} from "../Firebase/firebase";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection('gallery');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const name = await storageRef.name;
            console.log(name)
            await collectionRef.add({ name,url, createdAt });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;