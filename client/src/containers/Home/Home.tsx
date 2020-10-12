import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';
import Landing from '../../components/Landing';

// interface HomeProps {}

const Home: React.FC<unknown> = () => {
  return (
    <div className={styles.Home}>
      <nav className={styles.NavBar}>
        <Login />
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </nav>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
