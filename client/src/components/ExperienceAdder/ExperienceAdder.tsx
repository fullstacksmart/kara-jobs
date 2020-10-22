import React from 'react';
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
  return (
    <div className={styles.ExperienceAdder}>
      <EditPopup
        onSave={() => setExperiences}
        onCancel={() => setShowAdder(false)}
      >
        <h1>Deine Erfahrung</h1>
        <TextInput labelText="Position" id="positionName" />
        <TextInput labelText="Argbeitgeber/Unternehmen" id="employerName" />
        <TextInput labelText="Ort" id="employerCity" />
        <TextInput labelText="Beschreibung" id="positionDescription" />
        <TextInput type="month" labelText="from" id="fromDate" />
        <TextInput type="month" labelText="to" id="toDate" />
      </EditPopup>
    </div>
  );
};

export default ExperienceAdder;
