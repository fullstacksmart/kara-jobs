import firebase from 'firebase';
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: `G-${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };
