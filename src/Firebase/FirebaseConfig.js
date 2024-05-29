// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBIhBiO3flFpAcL2Fm_Ef22QQo6udFp5b4",
//   authDomain: "react-netflix-eb4f0.firebaseapp.com",
//   projectId: "react-netflix-eb4f0",
//   storageBucket: "react-netflix-eb4f0.appspot.com",
//   messagingSenderId: "29045190704",
//   appId: "1:29045190704:web:a7c74bd778aa5f993c7df5",
//   measurementId: "G-9TB7LL3YPM",
// };

// // Initialize Firebase
// export const FirebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVuw0WQws8VyTSxiYZfkHD36sujofeDT8",
  authDomain: "netflix-clone-f1f5a.firebaseapp.com",
  projectId: "netflix-clone-f1f5a",
  storageBucket: "netflix-clone-f1f5a.appspot.com",
  messagingSenderId: "396994177697",
  appId: "1:396994177697:web:ffb6817f051d29895f9ee0",
  measurementId: "G-G9Z692BFWK"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);