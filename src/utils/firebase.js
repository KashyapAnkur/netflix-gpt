// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8coBP6qhSMrfek6aSX_ow1CsES7EcKro",
  authDomain: "netflixgpt-cfbc6.firebaseapp.com",
  projectId: "netflixgpt-cfbc6",
  storageBucket: "netflixgpt-cfbc6.appspot.com",
  messagingSenderId: "810297921049",
  appId: "1:810297921049:web:766d751d36b58eb75a2488",
  measurementId: "G-DPS98BX0FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);