// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTz2C2x64CasbVMr-laMwhOFD8Kq1zO28",
  authDomain: "expense-tracker-17-4433f.firebaseapp.com",
  projectId: "expense-tracker-17-4433f",
  storageBucket: "expense-tracker-17-4433f.firebasestorage.app",
  messagingSenderId: "477316673576",
  appId: "1:477316673576:web:72ca200fddf243dc07451d",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
//firebase login
//firebase init
//firebase deploy
//https://expense-tracker-17-4433f.web.app/
