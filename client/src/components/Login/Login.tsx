import React from 'react';
import styles from './Login.module.scss';
import { useHistory } from 'react-router-dom';
import { auth, firebase } from '../../services/firebase';
import Button from '../Button';

const Login: React.FC<unknown> = (props: unknown) => {
  const history = useHistory();

  const googleLogin = async () => {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    await auth
      .signInWithPopup(googleAuth)
      .then(async (res) => {
        const token = await auth?.currentUser?.getIdToken(true);
        if (token) {
          sessionStorage.setItem('@token', token);
          history.push('/');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // const emailAuth = new firebase.auth.EmailAuthProvider();

  return (
    <div className={styles.Login}>
      <Button>Login</Button>
    </div>
  );
};

export default Login;
