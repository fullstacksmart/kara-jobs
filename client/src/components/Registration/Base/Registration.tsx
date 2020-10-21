import React from 'react';
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
  kind: 'talent' | 'employer' | 'login';
}

type Variant = {
  heading: string;
  googleText: string;
  onSubmit: 'createUser' | 'login';
  submitButton: string;
  alreadyText: string;
  alreadyLink: string;
  alreadyButtonText: string;
  otherKindText: string;
  otherKindLink: string;
};

const variants: {
  talent: Variant;
  employer: Variant;
  login: Variant;
} = {
  talent: {
    heading: 'In wenigen Schritten zu Deinem Profil',
    googleText: 'mit Google registrieren',
    onSubmit: 'createUser',
    submitButton: 'registrieren',
    alreadyText: 'Schon registriert?',
    alreadyLink: '/sign-in',
    alreadyButtonText: 'Einloggen',
    otherKindText: 'Ich bin Arbeitgeber',
    otherKindLink: '/employer-sign-up',
  },
  employer: {
    heading:
      'In wenigen Schritten mit internationalen Talenten aus dem medizinischen Bereich in Kontakt treten',
    googleText: 'mit Google registrieren',
    onSubmit: 'createUser',
    submitButton: 'registrieren',
    alreadyText: 'Schon registriert?',
    alreadyLink: '/sign-in',
    alreadyButtonText: 'Einloggen',
    otherKindText: 'Ich bin Pflegekraft',
    otherKindLink: '/talent-sign-up',
  },
  login: {
    heading: 'Login',
    googleText: 'mit Google einloggen',
    onSubmit: 'login',
    submitButton: 'einloggen',
    alreadyText: 'Noch nicht registriert?',
    alreadyLink: '/talent-sign-up',
    alreadyButtonText: 'Registrieren',
    otherKindText: '',
    otherKindLink: '',
  },
};

const Registration: React.FC<RegistrationProps> = ({
  kind,
}: RegistrationProps) => {
  const variant = variants[kind];
  const history = useHistory();
  const firebase = useFirebase();

  async function handleRedirect(user: any) {
    const uid = user.uid;
    const { page, complete, type, wrongLogin } = await redirect(uid, kind);
    console.log(page, complete, type, wrongLogin);
    // if (wrongLogin) {
    //   history.push('/talent-signup-0');
    //   return;
    // }
    if (complete) {
      //TO DO: Redirect to Talent / Employer Profile page (depending on kind)
      history.push('/');
    } else {
      history.push(`/${type}-signup-${page}`);
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    try {
      await firebase[variant.onSubmit]({ email, password });
      const user = firebase.auth().currentUser;
      if (user) handleRedirect(user);
    } catch (error) {
      console.error(error);
      if (
        error.message.includes(
          'There is no user record corresponding to this identifier',
        )
      ) {
        alert(
          'Es konnte kein Benutzer für Ihre Daten gefunden werden. Bitte klicken Sie unten auf Registrieren.',
        );
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await firebase.login({ provider: 'google', type: 'popup' });
      const user = firebase.auth().currentUser;
      if (user) handleRedirect(user);
    } catch (err) {
      console.error(err);
      //TO DO: Check if this error handling is necessary for google
      if (
        err.message.includes(
          'There is no user record corresponding to this identifier',
        )
      ) {
        alert(
          'Es konnte kein Benutzer für Ihre Daten gefunden werden. Bitte klicken Sie unten auf Registrieren.',
        );
      }
    }
  };

  return (
    <div className={styles.Registration}>
      <h1>{variant.heading}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.CheckBlock}>
          <TextInput id="email" labelText="Email" type={'email'} required />
        </div>
        <div className={styles.CheckBlock}>
          <TextInput
            id="password"
            labelText="Passwort"
            type={'password'}
            minlength={8}
            required
          />
        </div>
        <Button>{variant.submitButton}</Button>
        <div className={styles.alternativeRegistration}>
          <p>oder</p>
          <GoogleButton label={variant.googleText} onClick={signInWithGoogle} />
        </div>

        <Details>
          <p>
            {variant.alreadyText}{' '}
            <TextLink
              to={variant.alreadyLink}
              text={variant.alreadyButtonText}
            />
          </p>
        </Details>
      </form>
      {variant.otherKindText ? (
        <TextLink to={variant.otherKindLink} text={variant.otherKindText} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Registration;
