import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/kara_creme.png';
import Button from '../Button';

const Header: React.FC<unknown> = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} className={styles.logo} />
      <div className={styles.menu}>
        <ul className={styles.centeredMenu}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Für Talente</li>
          <li>Für Arbeitgeber</li>
          <li>Über uns</li>
        </ul>
        <ul className={styles.rightMenu}>
          <Link to="/signup">
            <li>Mitglied werden</li>
          </Link>
          <li className={styles.buttonWrapper}>
            <Button>Login</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
