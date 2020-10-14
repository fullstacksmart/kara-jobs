import React from 'react';
import styles from './Landing.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import arrowImg from '../../assets/arrow.png';
import hospitalImg from '../../assets/logos/hero_logo.png';

const Landing: React.FC<unknown> = () => {
  return (
    <div className={styles.Landing}>
      <Header />
      <div className={styles.BodyContainer}>
        <div className={styles.LeftContainer}>
          <h3 className={styles.Description}>
            Connecting international care and medical talents with German
            employers
          </h3>
          <ul>
            <Link to="/" className={styles.ItemContainer}>
              <li>Arbeitgeber in Deutschland finden</li>
              <img src={arrowImg} className={styles.Arrow} />
            </Link>
            <Link to="/" className={styles.ItemContainer}>
              <li>Die Anerkennung deiner Ausbildung</li>
              <img src={arrowImg} className={styles.Arrow} />
            </Link>
            <Link to="/" className={styles.ItemContainer}>
              <li>Dein Start in Deutschland</li>
              <img src={arrowImg} className={styles.Arrow} />
            </Link>
          </ul>
        </div>
        <div className={styles.ImgContainer}>
          <img src={hospitalImg} className={styles.Hospital} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
