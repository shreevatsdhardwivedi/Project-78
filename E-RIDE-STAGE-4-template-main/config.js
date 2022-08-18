import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNx-X-gqsapcTP9bG0zMzqyRgvqtSi4po",
  authDomain: "projectbuzzerapp.firebaseapp.com",
  databaseURL: "https://projectbuzzerapp-default-rtdb.firebaseio.com",
  projectId: "projectbuzzerapp",
  storageBucket: "projectbuzzerapp.appspot.com",
  messagingSenderId: "750455034601",
  appId: "1:750455034601:web:fb23184fb4564a57905678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


