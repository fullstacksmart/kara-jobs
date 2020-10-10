import React from 'react';
import styles from './GoogleLogin.module.scss';
import { useHistory } from 'react-router-dom';
import { auth, firebase } from '../../services/firebase';
import Button from '../Button';

interface GoogleLoginProps {
  text: string;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({
  text,
}: GoogleLoginProps) => {
  const history = useHistory();
  const googleLogin = async () => {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    await auth
      .signInWithPopup(googleAuth)
      .then(async (res) => {
        const token = await auth?.currentUser?.getIdToken(true);
        if (token) {
          console.log(res);
          console.log(token);
          sessionStorage.setItem('@token', token);
          history.push('/');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={styles.GoogleLogin}>
      <Button onClick={googleLogin}>{text}</Button>
    </div>
  );
};

export default GoogleLogin;
