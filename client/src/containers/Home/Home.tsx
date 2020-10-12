import React from 'react';
import styles from './Home.module.scss';
import Login from '../../components/Login';
<<<<<<< HEAD
import Landing from '../../components/Landing';
=======
import ButtonLink from '../../components/ButtonLink';
>>>>>>> beffad5093527444233f87a68d5c843981ae790e

// interface HomeProps {}

const Home: React.FC<unknown> = () => {
<<<<<<< HEAD
  return <Landing></Landing>;
=======
  return (
    <div className={styles.Home}>
      <nav className={styles.NavBar}>
        <ButtonLink text="Sign Up" to="sign-up" />
        <ButtonLink to="/sign-in" text="Sign In" />
      </nav>
      <h1>HOME</h1>
    </div>
  );
>>>>>>> beffad5093527444233f87a68d5c843981ae790e
};

export default Home;
