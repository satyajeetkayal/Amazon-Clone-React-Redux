import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMuTfsajoL-K6OrVnEwbf0Q1dtRzv-ljM",
  authDomain: "amz-clone-5e609.firebaseapp.com",
  projectId: "amz-clone-5e609",
  storageBucket: "amz-clone-5e609.appspot.com",
  messagingSenderId: "858333826380",
  appId: "1:858333826380:web:d131362b6b054824cf93e9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };
