// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5tdzXpBfXzx753kjsj49PoVCK4stfk7U",
  authDomain: "netfix-gpt-d7b63.firebaseapp.com",
  projectId: "netfix-gpt-d7b63",
  storageBucket: "netfix-gpt-d7b63.appspot.com",
  messagingSenderId: "382071640954",
  appId: "1:382071640954:web:457ee3329031300b497cc3",
  measurementId: "G-QJZ4FRLXTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);