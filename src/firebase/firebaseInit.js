import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJXUlE-XXY9yJw1MDc9LFQfItQ1PmZVPM",
    authDomain: "fireblogsny.firebaseapp.com",
    projectId: "fireblogsny",
    storageBucket: "fireblogsny.appspot.com",
    messagingSenderId: "749142315974",
    appId: "1:749142315974:web:46b155c1380f0a11f518c7"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();