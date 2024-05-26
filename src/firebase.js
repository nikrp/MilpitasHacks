// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjy0AmfZrUJxRn-ntfodRc9FiIO6vi1RM",
  authDomain: "donorflow-c4683.firebaseapp.com",
  projectId: "donorflow-c4683",
  storageBucket: "donorflow-c4683.appspot.com",
  messagingSenderId: "635421234375",
  appId: "1:635421234375:web:31f522563f2e90b0bedae2",
  measurementId: "G-NLKPHVBZF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }