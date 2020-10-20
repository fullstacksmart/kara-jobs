import React, { FormEvent, useState } from 'react';
import styles from './Registration.module.scss';
import TextInput from '../../TextInput';
import Button from '../../Button';
import TextLink from '../../TextLink';
import Details from '../../Details';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { redirect } from '../../../services/redirect';

interface RegistrationProps {
  kind: string;
  heading: string;
}

const Registration: React.FC<RegistrationProps> = ({
  kind,
  heading,
}: RegistrationProps) => {
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
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    try {
      firebase.createUser({ email, password });
      //history.push('/signedIn');
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = () => {
    try {
      firebase.login({ provider: 'google', type: 'popup' });
      //.then(() => history.push('/signedIn'));
    } catch (err) {
      console.error(err);
    }
  };

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const uid = user.uid;
      redirect(uid, kind);
    } else {
      // User is signed out.
    }
  });

  return (
    <div className={styles.Registration}>
      <h1>{heading}</h1>
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
          <p>oder</p>
          <GoogleButton
            label="mit Google registrieren"
            onClick={signInWithGoogle}
          />
        </div>

        <Details>
          <p>
            Schon registriert? <TextLink to="/sign-in" text="Einloggen" />
          </p>
        </Details>
      </form>
      <TextLink
        to={kind === 'talent' ? '/employer-sign-up' : 'talent-sign-up'}
        text={`Ich bin ${kind === 'talent' ? 'Arbeitgeber' : 'Pflegekraft'}`}
      />
    </div>
  );
};

export default Registration;
