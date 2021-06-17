// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDodB82Hn7j0K5X1Xd8_EIJEQ6UJa_PP94",
    authDomain: "blogging-site-9046d.firebaseapp.com",
    projectId: "blogging-site-9046d",
    storageBucket: "blogging-site-9046d.appspot.com",
    messagingSenderId: "1020741329399",
    appId: "1:1020741329399:web:8ff7aedaaf6ac83a848ef2",
    measurementId: "G-DP2ELW7SX5"
      
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default db;