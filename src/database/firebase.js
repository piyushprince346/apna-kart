import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhP88EJWkJkTtjMtjpNc_3AekIGKwdMrE",
    authDomain: "apna-kart-e-commerce.firebaseapp.com",
    projectId: "apna-kart-e-commerce",
    storageBucket: "apna-kart-e-commerce.appspot.com",
    messagingSenderId: "535976662961",
    appId: "1:535976662961:web:2e25aa768ab31abd508f90",
    measurementId: "G-29L7Q0E3ST"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };