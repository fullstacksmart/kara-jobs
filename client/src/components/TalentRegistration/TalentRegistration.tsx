import React, { FormEvent, useState } from 'react';
import styles from './TalentRegistration.module.scss';
import TextInput from '../../components/TextInput';
import Button from '../Button';
import TextLink from '../TextLink';
import Details from '../Details';

const TalentRegistration: React.FC<unknown> = () => {
  const [emailOK, setEmailOK] = useState(false);
  const [passwordOK, setPasswordOK] = useState(false);

  // TODO: implement real email check
  const checkEmail = (event: FormEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    const emailRegex = new RegExp(/^\w+@\w+\.\w+$/);
    setEmailOK(emailRegex.test(email));
  };

  const checkPassword = (
    event: FormEvent<HTMLInputElement & { password: string }>,
  ) => {
    const password = event.currentTarget.value;
    const passwordRegex = new RegExp(/^\w{8,}$/);
    setPasswordOK(passwordRegex.test(password));
  };

  const handleSubmit = (event?: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  return (
    <div className={styles.TalentRegistration}>
      <h1>In wenigen Schritten zu deinem Profil</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.currentTarget.email.value);
          console.log('change me!');
        }}
      >
        <div className={styles.CheckBlock}>
          <TextInput id="email" labelText="Email" onChange={checkEmail} />
          <div className={styles.Check}>{emailOK ? '✅' : '❌'}</div>
        </div>
        <div className={styles.CheckBlock}>
          <TextInput
            id="password"
            labelText="Passwort"
            onChange={checkPassword}
          />
          <div className={styles.Check}>{passwordOK ? '✅' : '❌'}</div>
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={!emailOK || !passwordOK}
        >
          registrieren
        </Button>
        <Details>
          <p>
            Schon registriert? <TextLink to="/sign-in" text="Sign In" />
          </p>
        </Details>
      </form>
      <TextLink to="/signedIn" text="Ich bin Arbeitgeber" />
    </div>
  );
};

export default TalentRegistration;
