// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfqqSlUxhG0UH-toT3NX2K_gH2Jim2dcw",
  authDomain: "friendlychat-f33cc.firebaseapp.com",
  projectId: "friendlychat-f33cc",
  storageBucket: "friendlychat-f33cc.appspot.com",
  messagingSenderId: "308775880242",
  appId: "1:308775880242:web:695363c9f67c4e1a849e2b",
  measurementId: "G-09G5NZ4PYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
