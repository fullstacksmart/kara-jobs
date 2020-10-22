import React from 'react';
import styles from './TalentQualification.module.scss';
import { Qualification } from '../../types/talent';
import TalentSingleQualification from '../TalentSingleQualification';
import ArrayFrame from '../ArrayFrame';

interface TalentQualificationProps {
  qualifications: Qualification[];
}

const TalentQualification: React.FC<TalentQualificationProps> = ({
  qualifications,
}: TalentQualificationProps) => {
  const qualificationComponents = qualifications.map((qualification) => {
    return (
      <TalentSingleQualification
        key={qualification.id}
        qualification={qualification}
      />
    );
  });
  return (
    <div className={styles.TalentQualification}>
      <ArrayFrame items={qualificationComponents} header="Deine Erfahrung" />
    </div>
  );
};

export default TalentQualification;
