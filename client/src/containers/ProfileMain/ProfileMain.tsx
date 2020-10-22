import React from 'react';
import styles from './ProfileMain.module.scss';
import MainInfo from '../../components/MainInfo';
import AboutMe from '../../components/AboutMe';
import ArrayFrame from '../../components/ArrayFrame';
import TalentExperience from '../../components/TalentExperience';
import { Experience, Qualification } from '../../types/talent';
import TalentQualification from '../../components/TalentQualification';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';

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

const qualifications: Qualification[] = [
  {
    id: 1,
    TalentId: 'abcd',
    // 1: ''
    // 2:
    // 3:
    degree: 'Zertifikat',
    fieldOfStudy: 'Ausbildung zur Krankenpflegerin',
    // 0:
    // 1:
    // 2:
    institutionName: 'Schwarzwaldklinik',
    studyStartMonth: 11,
    studyStartYear: 2014,
    studyEndYear: 2016,
    studyEndMonth: 4,
  },
  {
    id: 2,
    TalentId: 'qzb',
    fieldOfStudy: 'Anaesthesie',
    degree: 'Dr. med.',
    institutionName: 'Charité Berlin',
    studyStartMonth: 1,
    studyStartYear: 2015,
  },
];

const ProfileMain: React.FC<unknown> = () => {
  const reduxTalent = useSelector<RootState>((state) => state.talent);
  console.log(reduxTalent);
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
      <TalentQualification qualifications={qualifications} />
    </div>
  );
};

export default ProfileMain;
