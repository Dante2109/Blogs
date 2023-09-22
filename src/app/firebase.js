// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAm9zlabL7a575mXREejNrB9k2I23zLA4",
  authDomain: "blogs-nextjs-5dfd5.firebaseapp.com",
  projectId: "blogs-nextjs-5dfd5",
  storageBucket: "blogs-nextjs-5dfd5.appspot.com",
  messagingSenderId: "804758373162",
  appId: "1:804758373162:web:f5c162a5bf52916ea4d453",
  measurementId: "G-8ENL5P4LM4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth();
