import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { slide as Menu } from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: 'rgb(224, 241, 244)',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const BurgerMenu: React.FC<unknown> = () => {
  return (
    <Menu noOverlay styles={styles}>
      <Link to="/">Home</Link>
      <Link to="/">Für Talente</Link>
      <Link to="/">Für Arbeitgeber</Link>
      <Link to="/">Über uns</Link>
      <Link to="/signup">Mitglied werden</Link>
      <Link to="/sign-in">
        <Button>Login</Button>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
