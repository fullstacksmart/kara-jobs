import React from 'react';
import styles from './Header.module.scss';
import { BurgerStyles } from './BurgerStyles';
import logo from '../../assets/logos/kara_gradient.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';

const Header: React.FC<unknown> = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} className={styles.Logo} />
      <div className={styles.BurgerWrapper}>
        <BurgerMenu noOverlay right width={'65%'} styles={BurgerStyles}>
          <Link to="/">Home</Link>
          <Link to="/">Für Talente</Link>
          <Link to="/">Für Arbeitgeber</Link>
          <Link to="/">Über uns</Link>
          <Link to="/talent-sign-up">Mitglied werden</Link>
          <Link to="/sign-in">
            <Button>Login</Button>
          </Link>
        </BurgerMenu>
      </div>
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
          <Link to="/talent-sign-up" className={styles.Item}>
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
