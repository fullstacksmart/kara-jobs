import React from 'react';
import './App.scss';
import Router from './containers/Router';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './services/firebase';

const App: React.FC<unknown> = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
