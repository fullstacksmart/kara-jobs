import React from 'react';
import styles from './ProfileMain.module.scss';
import MainInfo from '../../components/MainInfo';
import AboutMe from '../../components/AboutMe';
import ArrayFrame from '../../components/ArrayFrame';

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
      <AboutMe title="Über Dich" />
      <ArrayFrame items={[]} header="Deine Erfahrung" />
      <ArrayFrame items={[]} header="Deine Ausbildung" />
    </div>
  );
};

export default ProfileMain;
