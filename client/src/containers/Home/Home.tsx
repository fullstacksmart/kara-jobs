import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div className={styles.Home}>
      <nav className={styles.NavBar}>
        <button>Log in</button>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </nav>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
