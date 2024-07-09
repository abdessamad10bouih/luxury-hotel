import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBJyYdnghxyY3AnT7w7syrA_CBnv2jVBF8",
    authDomain: "react-auth-dbfda.firebaseapp.com",
    projectId: "react-auth-dbfda",
    storageBucket: "react-auth-dbfda.appspot.com",
    messagingSenderId: "1026549275968",
    appId: "1:1026549275968:web:a22039baeb44f226cd6ea5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)