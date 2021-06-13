
import firebase from "firebase/app";
import useFirestore from "./useFirestore";

const deleteDoc = (doc , collection) =>{

if(collection === 'gallery') {


    firebase.firestore()
        .collection(collection)
        .doc(doc.id).delete()
        .catch((error) => console.log(error));

    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();
// Create a storage reference from our storage service
    var storageRef = storage.ref();
    var desertRef = storageRef.child(doc.name);

// Delete the file
    desertRef.delete().then(() => {
        // File deleted successfully
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });

}

else {

    firebase.firestore()
        .collection(collection)
        .doc(doc).delete()
        .catch((error) => console.log(error));

}

}
export default deleteDoc;