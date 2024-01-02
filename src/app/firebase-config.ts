// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCga2XtmXSXyITMLt4QFr-PtBAyYy5UxfU",
  authDomain: "nuevo-bienestar.firebaseapp.com",
  projectId: "nuevo-bienestar",
  storageBucket: "nuevo-bienestar.appspot.com",
  messagingSenderId: "458552586373",
  appId: "1:458552586373:web:85df9b77de96c7bfea39ec",
  measurementId: "G-7SBJ18D85T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

