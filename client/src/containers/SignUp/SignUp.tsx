import React from 'react';
import styles from './SignUp.module.scss';
import InitialSignUpForm from '../SignUp';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  return (
    <div className={styles.SignUp}>
      <InitialSignUpForm></InitialSignUpForm>
    </div>
  );
};

export default SignUp;
