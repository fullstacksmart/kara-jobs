import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC<unknown> = () => {
  const year: string = new Date().getFullYear().toString();

  return <div className={styles.Footer}>&copy; Kara {year}</div>;
};

export default Footer;
