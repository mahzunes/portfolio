// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9tP638vzBz0vc_9hP_Ab4xTDkr3jUHGI",
  authDomain: "portfolio-16ca6.firebaseapp.com",
  projectId: "portfolio-16ca6",
  storageBucket: "portfolio-16ca6.appspot.com",
  messagingSenderId: "704093921388",
  appId: "1:704093921388:web:c4970761765d0c8e56b849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);









