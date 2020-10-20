import React, { FormEvent, useState } from 'react';
import styles from './Registration.module.scss';
import TextInput from '../../TextInput';
import Button from '../../Button';
import TextLink from '../../TextLink';
import Details from '../../Details';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';

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
  // const [emailOK, setEmailOK] = useState(false);
  // const [passwordOK, setPasswordOK] = useState(false);
  const firebase = useFirebase();
  // TODO: implement real email check
  // const checkEmail = (event: FormEvent<HTMLInputElement>) => {
  //   const email = event.currentTarget.value;
  //   const emailRegex = new RegExp(/^\w+@\w+\.\w+$/);
  //   setEmailOK(emailRegex.test(email));
  // };

  // const checkPassword = (event: FormEvent<HTMLInputElement>) => {
  //   const password = event.currentTarget.value;
  //   const passwordRegex = new RegExp(/^\w{8,}$/);
  //   setPasswordOK(passwordRegex.test(password));
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitted');
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    try {
      firebase[variant.onSubmit]({ email, password });
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
    <div className={styles.Registration}>
      <h1>{variant.heading}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.CheckBlock}>
          <TextInput
            id="email"
            labelText="Email"
            type={'email'}
            required={true}
          />
          {/* <div className={styles.Check}>{emailOK ? '✅' : '❌'}</div> */}
        </div>
        <div className={styles.CheckBlock}>
          <TextInput
            id="password"
            labelText="Passwort"
            // onChange={checkPassword}
            minlength={8}
            required={true}
          />
          {/* <div className={styles.Check}>{passwordOK ? '✅' : '❌'}</div> */}
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
