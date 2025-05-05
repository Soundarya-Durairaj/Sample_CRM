import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDs2dFhk7vK-wNeDwL0UfYCRThPqpiYQVw",
    authDomain: "crm-chatbox.firebaseapp.com",
    projectId: "crm-chatbox",
    storageBucket: "crm-chatbox.firebasestorage.app",
    messagingSenderId: "31458609711",
    appId: "1:31458609711:web:4b182c0286f76cb00fd4da",
    measurementId: "G-E4VCTCVQE9"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
