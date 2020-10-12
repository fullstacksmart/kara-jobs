import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';
import Button from '../../components/Button';
import TextLink from '../../components/TextLink';
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
      <Login />
    </div>
  );
};

export default Home;
