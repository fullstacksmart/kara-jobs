import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './EditInfo.module.scss';

interface EditInfoAttributes {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const EditInfo: React.FC<EditInfoAttributes> = ({
  top,
  bottom,
  left,
  right,
}: EditInfoAttributes) => {
  const style: EditInfoAttributes = {};
  if (top) style.top = top;
  if (bottom) style.bottom = bottom;
  if (left) style.left = left;
  if (right) style.right = right;
  return (
    <div className={styles.EditInfo}>
      <FontAwesomeIcon icon={faEdit} size="2x" style={style} />
    </div>
  );
};

export default EditInfo;
