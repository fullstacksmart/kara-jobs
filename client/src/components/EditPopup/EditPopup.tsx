import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CancelSave from '../CancelSave';
import styles from './EditPopup.module.scss';

interface EditPopupPropsBase {
  onSave: (e: React.MouseEvent) => void;
  onCancel: (e: React.MouseEvent) => void;
  onDelete?: (e: React.MouseEvent) => void;
}

type EditPopupProps = EditPopupPropsBase & React.HTMLAttributes<HTMLElement>;

const EditPopup: React.FC<EditPopupPropsBase> = ({
  onSave,
  onCancel,
  onDelete,
  ...props
}: EditPopupProps) => {
  return (
    <div className={styles.EditPopup}>
      <div className={styles.InnerWindow}>
        {onDelete ? (
          <FontAwesomeIcon
            icon={faTrash}
            onClick={onDelete}
            className={styles.Trashcan}
          />
        ) : (
          <></>
        )}
        <div className={styles.ContentContainer}>{props.children}</div>
        <CancelSave onCancel={onCancel} onSave={onSave} />
      </div>
    </div>
  );
};

export default EditPopup;
