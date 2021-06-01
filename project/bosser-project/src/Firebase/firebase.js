import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWL4gLLGV_vDNkc-CTSr1wQGaMRyAZoTw",
    authDomain: "bosser-2d826.firebaseapp.com",
    projectId: "bosser-2d826",
    storageBucket: "bosser-2d826.appspot.com",
    messagingSenderId: "20613960661",
    appId: "1:20613960661:web:02f7b866417bb98031635c",
    measurementId: "G-MR8G4HTJB0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

/*Storage*/
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;



