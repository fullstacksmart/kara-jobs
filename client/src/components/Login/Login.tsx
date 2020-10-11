import React from 'react';
import GoogleLogin from '../GoogleLogin';
import styles from './Login.module.scss';

const Login: React.FC<unknown> = ({}) => {
  // const emailAuth = new firebase.auth.EmailAuthProvider();

  return (
    <div className={styles.Login}>
      {/* <GoogleLogin text="Login with Google" /> */}
    </div>
  );
};

export default Login;
