// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7RbG266PF9NZK733QmLVQnEdYAeL9GQ",
  authDomain: "taher-and-brothers.firebaseapp.com",
  projectId: "taher-and-brothers",
  storageBucket: "taher-and-brothers.appspot.com",
  messagingSenderId: "260123773572",
  appId: "1:260123773572:web:36c21dad6f5ceaf57bd0d1",
  measurementId: "G-8CCXKKHSL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;