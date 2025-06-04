// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTYGt06pmoQ2XlPEGb5JBvqibISi4Ifgs",
  authDomain: "firxttech.firebaseapp.com",
  projectId: "firxttech",
  storageBucket: "firxttech.firebasestorage.app",
  messagingSenderId: "256851523049",
  appId: "1:256851523049:web:082f53b63bf86f44b90778",
  measurementId: "G-B01PX6MNLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);