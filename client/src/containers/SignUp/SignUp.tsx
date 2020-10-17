import React from 'react';
import styles from './SignUp.module.scss';
import { useHistory } from 'react-router-dom';

const SignUp: React.FC<unknown> = () => {
  const history = useHistory();
  history.push('/talent-signup');

  return (
    <div className={styles.SignUp}>
      <h1>KARA</h1>
    </div>
  );
};

export default SignUp;
