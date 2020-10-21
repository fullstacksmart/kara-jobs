import React from 'react';
import styles from './ProfileMain.module.scss';
import MainInfo from '../../components/MainInfo';
import AboutMe from '../../components/AboutMe';
import ArrayFrame from '../../components/ArrayFrame';
import TalentExperience from '../../components/TalentExperience';
import { Experience } from '../../types/talent';

// mocks

const experiences: Experience[] = [
  {
    id: 1,
    TalentId: 'abcd',
    // 1: ''
    // 2:
    // 3:
    occupationId: 2,
    positionName: 'Krankenpflegerin',
    // 0:
    // 1:
    // 2:
    occupationStatusId: 0,
    employerName: 'Schwarzwaldklinik',
    employerCity: 'Hintertupfingen',
    positionStartMonth: 11,
    positionStartYear: 2019,
  },
  {
    id: 2,
    TalentId: 'qzb',
    occupationId: 1,
    positionName: 'Chefärztin',
    occupationStatusId: 1,
    employerName: 'Praxis Bülowbogen',
    positionStartMonth: 1,
    positionStartYear: 2015,
    positionEndMonth: 1,
    positionEndYear: 2016,
  },
];

const ProfileMain: React.FC<unknown> = () => {
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
      <TalentExperience experiences={experiences} />
      <ArrayFrame items={[]} header="Deine Ausbildung" />
    </div>
  );
};

export default ProfileMain;
