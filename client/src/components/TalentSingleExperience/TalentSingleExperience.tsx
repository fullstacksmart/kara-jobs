import React, { SyntheticEvent } from 'react';
import { getDuration } from '../../services/dateService';
import { Experience } from '../../types/talent';
import EditInfo from '../EditInfo';
import TextInfo from '../TextInfo';
import styles from './TalentSingleExperience.module.scss';

interface TalentSingleExperienceProps {
  experience: Experience;
  setShowAdder?: (event: SyntheticEvent<Element, Event>) => void;
}

const TalentSingleExperience: React.FC<TalentSingleExperienceProps> = ({
  experience,
  setShowAdder,
}: TalentSingleExperienceProps) => {
  const durationString = getDuration(
    experience.positionStartMonth,
    experience.positionStartYear,
    experience.positionEndMonth,
    experience.positionEndYear,
  );

  return (
    <div className={styles.TalentSingleExperience}>
      <div className={(styles.Half, styles.LeftHalf)}>
        <TextInfo title="Position" info={experience.positionName} />
        <TextInfo
          title="Arbeitgeber/Unternehmen"
          info={experience.employerName}
        />
        {experience.employerCity ? (
          <TextInfo title="Ort" info={experience.employerCity} />
        ) : (
          <></>
        )}
        {experience.positionDescription ? (
          <TextInfo
            title="Beschreibung"
            info={experience.positionDescription}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.Half}>
        <div className={styles.EditContainer}>
          <EditInfo top="0" onClick={setShowAdder} />
        </div>
        {durationString}
      </div>
    </div>
  );
};

export default TalentSingleExperience;
