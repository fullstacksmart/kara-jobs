import React from 'react';
import styles from './SignUp.module.scss';
import InitialSignUpForm from '../../components/InitialSignUpForm';

const SignUp: React.FC<unknown> = () => {
  return (
    <div className={styles.SignUp}>
      <h1>KARA</h1>
      <InitialSignUpForm />
    </div>
  );
};

export default SignUp;
