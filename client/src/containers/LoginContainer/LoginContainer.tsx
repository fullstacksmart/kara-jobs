import React from 'react';
import styles from './LoginContainer.module.scss';
import Login from '../../components/Login';

const LoginContainer: React.FC<unknown> = (props: unknown) => {
  return (
    <div className={styles.LoginContainer}>
      <h1>Login</h1>
      <Login />
    </div>
  );
};

export default LoginContainer;
