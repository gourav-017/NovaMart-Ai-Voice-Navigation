import {getAuth, GoogleAuthProvider} from "firebase/auth"

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ecommerce1-a28d3.firebaseapp.com",
  projectId: "ecommerce1-a28d3",
  storageBucket: "ecommerce1-a28d3.firebasestorage.app",
  messagingSenderId: "879292505392",
  appId: "1:879292505392:web:51ff756c1e46e7d372fcf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

