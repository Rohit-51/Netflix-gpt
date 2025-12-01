// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_jFaQeGhvNGSMM9TMdoE5qOi1y2WrgGI",
  authDomain: "netflix-clone-2d32d.firebaseapp.com",
  projectId: "netflix-clone-2d32d",
  storageBucket: "netflix-clone-2d32d.firebasestorage.app",
  messagingSenderId: "285166635352",
  appId: "1:285166635352:web:c808d1731c7c88aec53d2d",
  measurementId: "G-XTTLLVPL66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);