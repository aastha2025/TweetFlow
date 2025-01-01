// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBvhTcESetXbLYsnHXS4M7yO5T3t9gDVBY",
    authDomain: "tweet-flow.firebaseapp.com",
    projectId: "tweet-flow",
    storageBucket: "tweet-flow.firebasestorage.app",
    messagingSenderId: "1037276932363",
    appId: "1:1037276932363:web:56b98047fe290db13d1a0e",
    measurementId: "G-FR7FS1Q3DB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;