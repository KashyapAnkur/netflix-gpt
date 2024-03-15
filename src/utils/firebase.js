// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuq_t0c_XsqrJfuNQYbHfT4cYfMCFfsH8",
  authDomain: "netflixgpt-434dd.firebaseapp.com",
  projectId: "netflixgpt-434dd",
  storageBucket: "netflixgpt-434dd.appspot.com",
  messagingSenderId: "148885312020",
  appId: "1:148885312020:web:7b318894dd4e2d1908cd01",
  measurementId: "G-3611WM1B5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();