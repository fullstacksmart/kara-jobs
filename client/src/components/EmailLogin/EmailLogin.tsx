import React from 'react';
import styles from './EmailLogin.module.scss';
import { useHistory } from 'react-router-dom';
import { auth, firebase } from '../../services/firebase';

interface EmailLoginProps {
  text: string;
}

const EmailLogin: React.FC<EmailLoginProps> = ({ text }: EmailLoginProps) => {
  const history = useHistory();

  async function emailLogin() {
    const emailLoginProvider = new firebase.auth.EmailAuthProvider();
  }

  return <div className={styles.EmailLogin}>EmailLogin works!</div>;
};

export default EmailLogin;
