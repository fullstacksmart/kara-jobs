import React from 'react';
import { Experience } from '../../types/talent';
import ArrayFrame from '../ArrayFrame';
import TalentSingleExperience from '../TalentSingleExperience';
import styles from './TalentExperiences.module.scss';

interface TalentExperienceProps {
  experiences: Experience[];
}

const TalentExperiences: React.FC<TalentExperienceProps> = ({
  experiences,
}: TalentExperienceProps) => {
  const experienceComponents = experiences.map((experience) => {
    return (
      <TalentSingleExperience key={experience.id} experience={experience} />
    );
  });
  return (
    <div className={styles.TalentExperience}>
      <ArrayFrame items={experienceComponents} header="Deine Erfahrung" />
    </div>
  );
};

export default TalentExperiences;
