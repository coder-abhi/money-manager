// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASNFeWmDA3ZMXnFrIZo_8oETAjGR1_H_U",
  authDomain: "money-manager-b3079.firebaseapp.com",
  projectId: "money-manager-b3079",
  storageBucket: "money-manager-b3079.appspot.com",
  messagingSenderId: "710316596900",
  appId: "1:710316596900:web:4385146eaeae7f5a1c9031"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);