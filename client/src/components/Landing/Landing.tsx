import React from 'react';
import styles from './Landing.module.scss';

const Landing: React.FC<unknown> = () => {
  return (
    <div className={styles.Landing}>
      <header>
        <img src={require('../../../public/logos/kara_creme.png')} />
      </header>
    </div>
  );
};

export default Landing;
