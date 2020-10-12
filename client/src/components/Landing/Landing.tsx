import React from 'react';
import styles from './Landing.module.scss';
import Header from '../Header';

const Landing: React.FC<unknown> = () => {
  return (
    <div className={styles.Landing}>
      <Header></Header>
    </div>
  );
};

export default Landing;
