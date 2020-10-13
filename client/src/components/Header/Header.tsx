import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logos/kara_creme.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header: React.FC<unknown> = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} className={styles.logo} />
      <div className={styles.menu}>
        <ul className={styles.centeredMenu}>
          <Link to="/" className={styles.item}>
            Home
          </Link>
          <Link to="/" className={styles.item}>
            Für Talente
          </Link>
          <Link to="/" className={styles.item}>
            Für Arbeitgeber
          </Link>
          <Link to="/" className={styles.item}>
            Über uns
          </Link>
        </ul>
        <div className={styles.rightMenu}>

          <Link to="/signup" className={styles.item}>
            Mitglied werden
          </Link>

          <Link to="/sign-in" className={styles.buttonWrapper}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
