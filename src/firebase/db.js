import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = require("./config_lx.js").firebaseConfig;

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
