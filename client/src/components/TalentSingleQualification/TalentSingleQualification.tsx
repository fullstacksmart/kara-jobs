import React from 'react';
import { getDuration } from '../../services/dateService';
import { Qualification } from '../../types/talent';
import EditInfo from '../EditInfo';
import TextInfo from '../TextInfo';
import styles from './TalentSingleQualification.module.scss';

interface TalentSingleQualificationProps {
  qualification: Qualification;
}

const TalentSingleQualification: React.FC<TalentSingleQualificationProps> = ({
  qualification,
}: TalentSingleQualificationProps) => {
  const durationString = getDuration(
    qualification.studyStartMonth,
    qualification.studyStartYear,
    qualification.studyEndMonth,
    qualification.studyEndYear,
  );
  return (
    <div className={styles.TalentSingleQualification}>
      <div className={(styles.Half, styles.LeftHalf)}>
        <TextInfo title="Bereich" info={qualification.fieldOfStudy || ''} />
        <TextInfo title="Abschluss" info={qualification.degree || ''} />
        <TextInfo
          title="Institution"
          info={qualification.institutionName || ''}
        />
        {qualification.studyDescription ? (
          <TextInfo
            title="Beschreibung"
            info={qualification.studyDescription}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.Half}>
        <div className={styles.EditContainer}>
          <EditInfo top="0" />
        </div>
        {durationString}
      </div>
    </div>
  );
};

export default TalentSingleQualification;
