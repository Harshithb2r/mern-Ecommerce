// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-commerce-cd7f5.firebaseapp.com",
    projectId: "mern-commerce-cd7f5",
    storageBucket: "mern-commerce-cd7f5.appspot.com",
    messagingSenderId: "573183040890",
    appId: "1:573183040890:web:fbbf8ebea49980d9be0ac3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);