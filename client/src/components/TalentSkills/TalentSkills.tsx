import React from 'react';
import styles from './TalentSkills.module.scss';
import { Language, Skill } from '../../types/talent';
import EditableList from '../EditableList';

interface TalentSkillsProps {
  languages: Language[];
  skills: Skill[];
}

const TalentSkills: React.FC<TalentSkillsProps> = ({
  languages,
  skills,
}: TalentSkillsProps) => {
  return (
    <div className={styles.TalentSkills}>
      <h1>Deine Kenntnisse</h1>
      <EditableList heading="Sprache" items={languages} />
      <EditableList heading="Fachliche Kenntnisse" items={skills} />
    </div>
  );
};

export default TalentSkills;
