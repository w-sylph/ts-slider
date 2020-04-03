import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATIcgDIuTtwh6gIPn1vO0A3uAdmXpSzeo",
  authDomain: "besnard-7fa56.firebaseapp.com",
  databaseURL: "https://besnard-7fa56.firebaseio.com",
  projectId: "besnard-7fa56",
  storageBucket: "besnard-7fa56.appspot.com",
  messagingSenderId: "292099194786",
  appId: "1:292099194786:web:a0fb995f644c71e345fcfb",
  measurementId: "G-RGP2PG4C7Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const sliderCollection = db.collection("sliders");

export default {
  db,
  sliderCollection
};
