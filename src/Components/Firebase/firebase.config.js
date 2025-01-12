// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdhy7OSrggGuz7rzsBcTouzETugvORSPg",
  authDomain: "dragon-news-51.firebaseapp.com",
  projectId: "dragon-news-51",
  storageBucket: "dragon-news-51.firebasestorage.app",
  messagingSenderId: "73440198261",
  appId: "1:73440198261:web:11bfbc630ed891ef5b023c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth