import React from 'react';
import styles from './InitialSignUpForm.module.scss';

interface InitialSignUpFormProps {}

const InitialSignUpForm: React.FC<InitialSignUpFormProps> = (
  props: InitialSignUpFormProps,
) => {
  return (
    <div className={styles.InitialSignUpForm}>
      <form>
        <label>Email</label>
        <input type="text" id="email" name="email"></input>
        <label>Password</label>
        <input type="text" id="password" name="password"></input>
      </form>
    </div>
  );
};

export default InitialSignUpForm;
