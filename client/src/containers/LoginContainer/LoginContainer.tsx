import React from 'react';
import styles from './LoginContainer.module.scss';
import Login from '../../components/Login';
import TextLink from '../../components/TextLink';
import Details from '../../components/Details';

const LoginContainer: React.FC<unknown> = () => {
  return (
    <div className={styles.LoginContainer}>
      <h1>Login</h1>
      <Login />
      <Details>
        <p>
          Neu hier? <TextLink to="/talent-sign-up" text="Registrieren" />
        </p>
      </Details>
    </div>
  );
};

export default LoginContainer;
