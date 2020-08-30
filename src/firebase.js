import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
// import "firebase/firestore";

// Initialize your firebase app
firebase.initializeApp({
  apiKey: "AIzaSyCq3stFNaY15r-2gKGFHK3wii4rY5qF1eU",
  authDomain: "smartbee-interviewproject-0001.firebaseapp.com",
  databaseURL: "https://smartbee-interviewproject-0001.firebaseio.com",
  projectId: "smartbee-interviewproject-0001",
  storageBucket: "smartbee-interviewproject-0001.appspot.com",
  messagingSenderId: "174452114697",
  appId: "1:174452114697:web:38c1e65a176a61a360bfd8",
  measurementId: "G-0JBN8V6R1M",
});
// firebase.firestore().settings({ timestampsInSnapshots: true })

// export const db = firebase.firestore();

export const db = firebase.database() ;
export const storage = firebase.storage();

