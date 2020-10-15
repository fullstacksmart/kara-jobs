import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logos/kara_creme.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';

const Header: React.FC<unknown> = () => {
  return (
    <div className={styles.Header}>
      {/* <BurgerMenu /> */}
      <img src={logo} className={styles.Logo} />
      <div className={styles.Menu}>
        <div className={styles.CenteredMenu}>
          <Link to="/" className={styles.Item}>
            Home
          </Link>
          <Link to="/" className={styles.Item}>
            Für Talente
          </Link>
          <Link to="/" className={styles.Item}>
            Für Arbeitgeber
          </Link>
          <Link to="/" className={styles.Item}>
            Über uns
          </Link>
        </div>
        <div className={styles.RightMenu}>
          <Link to="/signup" className={styles.Item}>
            Mitglied werden
          </Link>
          <Link to="/sign-in" className={styles.ButtonWrapper}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
