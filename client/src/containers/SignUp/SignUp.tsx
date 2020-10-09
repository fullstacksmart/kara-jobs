import React from 'react';
import styles from './SignUp.module.scss';
import InitialSignUpForm from '../../components/InitialSignUpForm';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  return (
    <div className={styles.SignUp}>
      <h1>KARA</h1>
      <InitialSignUpForm></InitialSignUpForm>
    </div>
  );
};

export default SignUp;
