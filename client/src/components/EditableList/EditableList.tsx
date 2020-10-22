import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Language, Skill } from '../../types/talent';
import EditInfo from '../EditInfo';
import styles from './EditableList.module.scss';

interface EditableListProps {
  heading: string;
  items: Language[] & Skill[];
  addItem?: (event: React.MouseEvent) => void;
}

const EditableList: React.FC<EditableListProps> = ({
  heading,
  items,
  addItem,
}: EditableListProps) => {
  const itemComponents = items.map((item: Language & Skill) => {
    return (
      <li key={item.id} className={styles.ListItem}>
        {item.language || item.skill || ''}
        <EditInfo top="" bottom="" />
      </li>
    );
  });
  return (
    <div className={styles.EditableList}>
      <div className={styles.HeadingContainer}>
        <h2>{heading}</h2>
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
          className={styles.Icon}
          onClick={addItem}
        />
      </div>
      <ul className={styles.UnorderedList}>{itemComponents}</ul>
    </div>
  );
};

export default EditableList;
