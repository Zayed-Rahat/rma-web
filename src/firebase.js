/* import * as firebase from "firebase"; */
import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDjJZPsztBpIblZpPq6tXRlGoyOm0QIw54",
  authDomain: "rma-web-f159d.firebaseapp.com",
  projectId: "rma-web-f159d",
  storageBucket: "rma-web-f159d.appspot.com",
  messagingSenderId: "560147762019",
  appId: "1:560147762019:web:0b8af0141b9ab6152ba156",
  measurementId: "G-WR5X8L406C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* firebase.analytics(); */

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
