// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVlj7_-liIeNwO5nb7t3dhh5bd6iS031I",
    authDomain: "email-password-auth-final.firebaseapp.com",
    projectId: "email-password-auth-final",
    storageBucket: "email-password-auth-final.appspot.com",
    messagingSenderId: "110775492514",
    appId: "1:110775492514:web:42266bf1b7ec31c20e9cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth