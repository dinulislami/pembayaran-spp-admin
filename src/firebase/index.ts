// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC6uxAv_Q2BcuUFfFZjmDlTdU1ezGYw0Q",
  authDomain: "smk-csk.firebaseapp.com",
  projectId: "smk-csk",
  storageBucket: "smk-csk.appspot.com",
  messagingSenderId: "313759398688",
  appId: "1:313759398688:web:cefc53e3e9c7368fee3545",
  measurementId: "G-NEHKTGEZGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage }