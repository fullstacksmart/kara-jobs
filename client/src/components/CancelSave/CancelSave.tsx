import React, { HTMLAttributes } from 'react';
import Button from '../Button';
import styles from './CancelSave.module.scss';

interface CancelSaveProps extends HTMLAttributes<HTMLElement> {
  onCancel?: (event: React.MouseEvent) => void;
  onSave?: (event: React.MouseEvent) => void;
}

const CancelSave: React.FC<CancelSaveProps> = ({
  onCancel,
  onSave,
  ...props
}: CancelSaveProps) => {
  return (
    <div className={styles.CancelSave} {...props}>
      <Button onClick={onCancel}>Zurück</Button>
      <Button onClick={onSave}>Speichern</Button>
    </div>
  );
};

export default CancelSave;
