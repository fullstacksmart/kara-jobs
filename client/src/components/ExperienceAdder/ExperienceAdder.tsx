import React, { SetStateAction, useState } from 'react';
import { Experience } from '../../types/talent';
import EditPopup from '../EditPopup';
import TextInput from '../TextInput';
import styles from './ExperienceAdder.module.scss';

interface ExperienceAdderProps {
  experience?: Experience;
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
  setShowAdder: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceAdder: React.FC<ExperienceAdderProps> = ({
  experience,
  setExperiences,
  setShowAdder,
}: ExperienceAdderProps) => {
  const [currentExperience, setCurrentExperience] = useState(experience);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    return setCurrentExperience({
      ...currentExperience,
      [e.currentTarget.name]: e.currentTarget.value,
    } as SetStateAction<Experience | undefined>);
  };

  return (
    <div className={styles.ExperienceAdder}>
      <EditPopup
        onSave={() => setExperiences}
        onCancel={() => setShowAdder(false)}
      >
        <h1>Deine Erfahrung</h1>
        <TextInput
          labelText="Position"
          id="positionName"
          value={currentExperience!.positionName || ''}
          onChange={handleInputChange}
        />
        <TextInput
          labelText="Argbeitgeber/Unternehmen"
          id="employerName"
          value={currentExperience!.employerName || ''}
          onChange={handleInputChange}
        />
        <TextInput
          labelText="Ort"
          id="employerCity"
          value={currentExperience!.employerCity || ''}
          onChange={handleInputChange}
        />
        <TextInput
          labelText="Beschreibung"
          id="positionDescription"
          value={currentExperience!.positionDescription || ''}
          onChange={handleInputChange}
        />
        <TextInput
          type="month"
          labelText="from"
          id="fromDate"
          value={
            `${currentExperience!.positionStartMonth} ${
              currentExperience!.positionStartYear
            }` || ''
          }
          onChange={handleInputChange}
        />
        <TextInput
          type="month"
          labelText="to"
          id="toDate"
          value={
            `${currentExperience!.positionEndMonth} ${
              currentExperience!.positionEndYear
            }` || ''
          }
          onChange={handleInputChange}
        />
      </EditPopup>
    </div>
  );
};

export default ExperienceAdder;
