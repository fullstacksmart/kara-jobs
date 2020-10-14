import React from 'react';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu: React.FC<unknown> = () => {
  return (
    <Menu noOverlay className={styles.Menu} styles={styles}>
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
      <Link to="/signup" className={styles.Item}>
        Mitglied werden
      </Link>
      <Link to="/sign-in" className={styles.ButtonWrapper}>
        <Button>Login</Button>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
