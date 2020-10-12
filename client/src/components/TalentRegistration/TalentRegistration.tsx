import React, { FormEvent, useState } from 'react';
import styles from './TalentRegistration.module.scss';
import TextInput from '../../components/TextInput';
import Button from '../Button';
import TextLink from '../TextLink';
import Details from '../Details';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const TalentRegistration: React.FC<unknown> = () => {
  const history = useHistory();
  const [emailOK, setEmailOK] = useState(false);
  const [passwordOK, setPasswordOK] = useState(false);
  const firebase = useFirebase();
  // TODO: implement real email check
  const checkEmail = (event: FormEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    const emailRegex = new RegExp(/^\w+@\w+\.\w+$/);
    setEmailOK(emailRegex.test(email));
  };

  const checkPassword = (event: FormEvent<HTMLInputElement>) => {
    const password = event.currentTarget.value;
    const passwordRegex = new RegExp(/^\w{8,}$/);
    setPasswordOK(passwordRegex.test(password));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    console.log('submitted');
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    try {
      firebase.createUser({ email, password });
      history.push('/signedIn');
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = () => {
    try {
      firebase
        .login({ provider: 'google', type: 'popup' })
        .then(() => history.push('/signedIn'));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.TalentRegistration}>
      <h1>In wenigen Schritten zu deinem Profil</h1>
      <form onSubmit={handleSubmit}>
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
        <Button disabled={!emailOK || !passwordOK}>registrieren</Button>
        <div className={styles.alternativeRegistration}>
          <p>or</p>
          <GoogleButton onClick={signInWithGoogle} />
        </div>

        <Details>
          <p>
            Schon angemeldet?{' '}
            {/* <TextLink href="#" onClick={login} text="Sign In" /> */}
          </p>
        </Details>
      </form>
      {/* <TextLink href="/signedIn" text="Ich bin Arbeitgeber" /> */}
    </div>
  );
};

export default TalentRegistration;
