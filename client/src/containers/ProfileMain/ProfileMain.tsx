import React from 'react';
import styles from './ProfileMain.module.scss';
import MainInfo from '../../components/MainInfo';
//import AboutMe from '../../components/AboutMe';

const ProfileMain: React.FC<unknown> = (props: unknown) => {
  return (
    <div className={styles.ProfileMain}>
      <MainInfo
        firstName="Max"
        lastName="Mustermann"
        profession="Krankenpfleger"
        city="Belgrad"
        country="Serbien"
      />
      {/* <AboutMe /> */}
    </div>
  );
};

export default ProfileMain;
