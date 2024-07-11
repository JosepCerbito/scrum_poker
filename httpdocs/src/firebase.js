import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjm9YiZ6bEZsH30uC3P2UkdNlSNZvFfSI",
  authDomain: "scrum-poker-efc3f.firebaseapp.com",
  projectId: "scrum-poker-efc3f",
  storageBucket: "scrum-poker-efc3f.appspot.com",
  messagingSenderId: "466803377699",
  appId: "1:466803377699:web:68f20607b8c223e9019396",
  measurementId: "G-60YCW9GGE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };