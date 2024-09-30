// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Firebase Storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw6E8ueoqOpvMpIYCv81q1eIRu1I0Ku1o",
  authDomain: "ecommerce-467ca.firebaseapp.com",
  projectId: "ecommerce-467ca",
  storageBucket: "ecommerce-467ca.appspot.com",
  messagingSenderId: "886552346342",
  appId: "1:886552346342:web:f3d981b56039416e0b0527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const fireDb = getFirestore(app);
const auth = getAuth(app);

// Export the db and storage objects
export { db, fireDb, auth };