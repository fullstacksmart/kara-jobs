import React from 'react';
import { useFirebase } from 'react-redux-firebase';
// import GoogleLogin from '../GoogleLogin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as fb from 'firebase';
import styles from './Login.module.scss';
const fireAuth: {
  GoogleAuthProvider: { PROVIDER_ID: string };
  EmailAuthProvider: { PROVIDER_ID: string };
} = fb.auth;

const Login: React.FC<unknown> = ({}) => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
      fireAuth.GoogleAuthProvider.PROVIDER_ID,
      fireAuth.EmailAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: 'none',
  };
  const firebase = useFirebase();

  return (
    <div className={styles.Login}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Login;
