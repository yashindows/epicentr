// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCclKfmkpdIfykUFOcYkxDU1FBvVRcZM",
  authDomain: "epicenter-3f51d.firebaseapp.com",
  projectId: "epicenter-3f51d",
  storageBucket: "epicenter-3f51d.appspot.com",
  messagingSenderId: "703292792992",
  appId: "1:703292792992:web:a70f1f8fa48f8049a1e9c5",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default getFirestore()
