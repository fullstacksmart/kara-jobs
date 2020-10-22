import React from 'react';
import styles from './TalentSkills.module.scss';
import { Language, Skill } from '../../types/talent';
import EditableList from '../EditableList';
import ArrayFrame from '../ArrayFrame';

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
      <div className={styles.Wrapper}>
        <EditableList heading="Sprache" items={languages} />
        <EditableList heading="Fachliche Kenntnisse" items={skills} />
      </div>
    </div>
  );
};

export default TalentSkills;
