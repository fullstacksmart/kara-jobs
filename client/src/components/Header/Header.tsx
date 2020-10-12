import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/kara_creme.png';
import Button from '../Button';
import TextLink from '../../components/TextLink';

const Header: React.FC<unknown> = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} className={styles.logo} />
      <div className={styles.menu}>
        <div className={styles.centeredMenu}>
          {/* <Link to="/">
            <li>Home</li>
          </Link> */}
          <TextLink text="Home" to="/"></TextLink>
          <TextLink text="Für Talente"></TextLink>
          <TextLink text="Für Arbeitgeber"></TextLink>
          <TextLink text="Über uns"></TextLink>
        </div>
        <div className={styles.rightMenu}>
          {/* <Link to="/signup">
            <li>Mitglied werden</li>
          </Link> */}
          <TextLink text="Mitglied werden"></TextLink>
          <li className={styles.buttonWrapper}>
            <Button>Login</Button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
