import React from 'react';
import styles from './Registration.module.scss';
import TextInput from '../../TextInput';
import Button from '../../Button';
import TextLink from '../../TextLink';
import Details from '../../Details';
import BlueWrapper from '../../../containers/BlueWrapper';
import logo from '../../../assets/logos/kara_lightblue.png';
import googleIcon from '../../../assets/icons/google.jpg';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
// import GoogleButton from 'react-google-button';
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
    submitButton: 'Registrieren',
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
    submitButton: 'Registrieren',
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
    submitButton: 'Einloggen',
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
      } else if (error.message.includes('The email address is already')) {
        alert(
          'Es gibt bereits einen Benutzer mit dieser E-Mail Adresse. Bitte loggen Sie sich ein.',
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
    <BlueWrapper>
      <div className={styles.Registration}>
        <div className={styles.FormHeader}>
          <img src={logo} className={styles.Logo} />
          <div className={styles.TextHeader}>{variant.heading}</div>
        </div>
        <div className={styles.FormWrapper}>
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
            <div className={styles.ButtonWrapper}>
              <Button>{variant.submitButton}</Button>
            </div>
            <div className={styles.alternativeRegistration}>
              <div className={styles.Text}>oder</div>
              <div className={styles.GoogleButtonWrapper}>
                <Button onClick={signInWithGoogle}>
                  <div className={styles.GoogleContainer}>
                    <div className={styles.ButtonIconWrapper}>
                      <img src={googleIcon} className={styles.GoogleIcon} />
                    </div>
                    <div className={styles.ButtonTextWrapper}>
                      {variant.googleText}
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            <Details>
              {variant.alreadyText}{' '}
              <TextLink
                to={variant.alreadyLink}
                text={variant.alreadyButtonText}
              />
            </Details>
          </form>
          {variant.otherKindText ? (
            <div className={styles.Option}>
              <TextLink
                to={variant.otherKindLink}
                text={variant.otherKindText}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </BlueWrapper>
  );
};

export default Registration;
