import React from 'react';
import styles from './Home.module.scss';
import Login from '../../components/Login';
import ButtonLink from '../../components/ButtonLink';

// interface HomeProps {}

const Home: React.FC<unknown> = () => {
  return (
    <div className={styles.Home}>
      <nav className={styles.NavBar}>
        <ButtonLink text="Sign Up" to="sign-up" />
        <ButtonLink to="/sign-in" text="Sign In" />
      </nav>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
