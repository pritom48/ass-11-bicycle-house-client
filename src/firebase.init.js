// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeCFB1ooV--tvofSvi8suBr8iXwtZ47vc",
    authDomain: "bicycle-house-cda08.firebaseapp.com",
    projectId: "bicycle-house-cda08",
    storageBucket: "bicycle-house-cda08.appspot.com",
    messagingSenderId: "278630503843",
    appId: "1:278630503843:web:72ad0e6f27f61407faf616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;