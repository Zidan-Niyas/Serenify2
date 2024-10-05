// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNmRStRTruj1Cr-n0Soi7ZbQuCR5Fryu4",
  authDomain: "serenity-47b72.firebaseapp.com",
  projectId: "serenity-47b72",
  storageBucket: "serenity-47b72.appspot.com",
  messagingSenderId: "29160581284",
  appId: "1:29160581284:web:d0ed5bf33dd05710f39e31",
  measurementId: "G-V550K2GHFV",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
