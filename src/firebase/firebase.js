import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiXi7JhWvzxhWfq6eFWs2COnIy1VsQPEA",
    authDomain: "slack-clone-d7ca6.firebaseapp.com",
    projectId: "slack-clone-d7ca6",
    storageBucket: "slack-clone-d7ca6.appspot.com",
    messagingSenderId: "1077221470021",
    appId: "1:1077221470021:web:6bab7182be90104727582c",
    measurementId: "G-7TZVLQEGQ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider}

export default db;