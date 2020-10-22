import React from 'react';
import styles from './ProfileMain.module.scss';
import MainInfo from '../../components/MainInfo';
import AboutMe from '../../components/AboutMe';
import TalentExperience from '../../components/TalentExperience';
import { Experience, Language, Qualification, Skill } from '../../types/talent';
import TalentQualification from '../../components/TalentQualification';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';
import TalentSkills from '../../components/TalentSkills';

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

const languages: Language[] = [
  {
    id: 1,
    language: 'serbisch',
    languageLevel: 5,
  },
  {
    id: 2,
    language: 'deutsch',
    languageLevel: 2,
  },
];
const skills: Skill[] = [
  {
    id: 1,
    skill: 'Alte Menschen',
  },
];

const ProfileMain: React.FC<unknown> = () => {
  // const reduxTalent = useSelector<RootState>((state) => state.talent);
  // console.log(reduxTalent);
  return (
    <div className={styles.ProfileMain}>
      <MainInfo />
      <AboutMe title="Über Dich" />
      <TalentExperience experiences={experiences} />
      <TalentQualification qualifications={qualifications} />
      <TalentSkills languages={languages} skills={skills} />
    </div>
  );
};

export default ProfileMain;
