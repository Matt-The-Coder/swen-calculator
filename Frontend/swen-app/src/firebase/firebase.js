// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdTwo0G8Wvom_i7lSFDcS1aVV_PYLsziQ",
  authDomain: "sweninsurancecompany.firebaseapp.com",
  projectId: "sweninsurancecompany",
  storageBucket: "sweninsurancecompany.appspot.com",
  messagingSenderId: "330141478166",
  appId: "1:330141478166:web:3b40aa3f118808be867437",
  measurementId: "G-MXDCM1Z0DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

