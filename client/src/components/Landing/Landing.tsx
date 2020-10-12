import React from 'react';
import styles from './Landing.module.scss';
import Header from '../Header';
import arrowImg from '../../assets/arrow.png';
import hospitalImg from '../../assets/logos/hero_logo.png';

const Landing: React.FC<unknown> = () => {
  return (
    <div className={styles.Landing}>
      <Header />
      <div className={styles.bodyContainer}>
        <div></div>
        <div className={styles.leftContainer}>
          <h3>
            Connecting international care and medical talents with German
            employers
          </h3>
          <ul>
            <div className={styles.itemContainer}>
              <li>Arbeitgeber in Deutschland finden</li>
              <img src={arrowImg} className={styles.arrow} />
            </div>
            <div className={styles.itemContainer}>
              <li>Die Anerkennung deiner Ausbildung</li>
              <img src={arrowImg} className={styles.arrow} />
            </div>
            <div className={styles.itemContainer}>
              <li>Dein Start in Deutschland</li>
              <img src={arrowImg} className={styles.arrow} />
            </div>
          </ul>
        </div>
        <img src={hospitalImg} className={styles.hospital} />
      </div>
    </div>
  );
};

export default Landing;
