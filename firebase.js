// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNyUEtkfE4swagx9R1n4I96n2Jqa21juk",
  authDomain: "insta-reels-7de54.firebaseapp.com",
  projectId: "insta-reels-7de54",
  storageBucket: "insta-reels-7de54.appspot.com",
  messagingSenderId: "43691673971",
  appId: "1:43691673971:web:4bf385247deb3dbd405d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage,db};