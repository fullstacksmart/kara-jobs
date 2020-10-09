import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.config();

firebase.initializeApp({
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "kara-628e0.firebaseapp.com",
    databaseURL: "https://kara-628e0.firebaseio.com",
    projectId: "kara-628e0",
    storageBucket: "kara-628e0.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-X3SZGVYYVG"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
