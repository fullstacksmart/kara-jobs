import React from 'react';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div className={styles.Home}>
      <nav className={styles.NavBar}>
        <button>Log in</button>
        <button>Sign up</button>
      </nav>
    </div>
  );
};

export default Home;
