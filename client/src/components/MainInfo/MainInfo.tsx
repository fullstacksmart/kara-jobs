import React from 'react';
import styles from './MainInfo.module.scss';

interface MainInfoAttributes {
  name: string;
  profession: string;
  city: string;
}

const MainInfo: React.FC<MainInfoAttributes> = ({
  name,
  profession,
  city,
}: MainInfoAttributes) => {
  return (
    <div className={styles.MainInfo}>
      <div className={styles.ProfilePic}></div>
      <div className={styles.InfoText}>
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <h2>{city}</h2>
      </div>
    </div>
  );
};

export default MainInfo;
