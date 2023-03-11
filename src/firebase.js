import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtrU1zL9iWVap2sCabJkwKsUF3Cf2txOw",
    authDomain: "linkedin-clone-yt-381cc.firebaseapp.com",
    projectId: "linkedin-clone-yt-381cc",
    storageBucket: "linkedin-clone-yt-381cc.appspot.com",
    messagingSenderId: "124628026784",
    appId: "1:124628026784:web:4b548488e4dfe7a51b90c5",
    measurementId: "G-8EFMZ11GPF"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

