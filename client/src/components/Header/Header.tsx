import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logos/kara_creme.png';
import Button from '../Button';
import TextLink from '../../components/TextLink';
import { Link } from 'react-router-dom';

const Header: React.FC<unknown> = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} className={styles.logo} />
      <div className={styles.menu}>
        <div className={styles.centeredMenu}>
          <TextLink text="Home" to="/"></TextLink>
          <TextLink text="Für Talente" to="/"></TextLink>
          <TextLink text="Für Arbeitgeber" to="/"></TextLink>
          <TextLink text="Über uns" to="/"></TextLink>
        </div>
        <div className={styles.rightMenu}>
          <TextLink
            text="Mitglied werden"
            to="/talent-sign-up"
            className={styles.item}
          ></TextLink>
          <Link to="/sign-in" className={styles.buttonWrapper}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
