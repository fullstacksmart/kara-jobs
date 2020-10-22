import React, { useState } from 'react';
import { Experience } from '../../types/talent';
import ArrayFrame from '../ArrayFrame';
import ExperienceAdder from '../ExperienceAdder';
import TalentSingleExperience from '../TalentSingleExperience';
import styles from './TalentExperiences.module.scss';

interface TalentExperienceProps {
  experiences: Experience[];
}

const TalentExperiences: React.FC<TalentExperienceProps> = ({
  experiences,
}: TalentExperienceProps) => {
  const [currentExperiences, setCurrentExperiences] = useState(experiences);
  const [showAdder, setShowAdder] = useState(false);

  const experienceComponents = currentExperiences.map((experience) => {
    return (
      <TalentSingleExperience key={experience.id} experience={experience} />
    );
  });
  return (
    <div className={styles.TalentExperience}>
      <ArrayFrame
        items={experienceComponents}
        header="Deine Erfahrung"
        onClick={() => setShowAdder(true)}
      />
      {showAdder ? (
        <ExperienceAdder
          setExperiences={setCurrentExperiences}
          setShowAdder={setShowAdder}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TalentExperiences;
