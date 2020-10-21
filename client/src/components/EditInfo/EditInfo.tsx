import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { SyntheticEvent } from 'react';
import styles from './EditInfo.module.scss';

interface EditInfoAttributes {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  onClick?: React.EventHandler<SyntheticEvent>;
}

const EditInfo: React.FC<
  EditInfoAttributes & React.HTMLAttributes<HTMLHtmlElement>
> = ({ top, bottom = '0', left, right = '0', onClick }: EditInfoAttributes) => {
  const style: EditInfoAttributes = {};
  if (top) style.top = top;
  if (bottom) style.bottom = bottom;
  if (left) style.left = left;
  if (right) style.right = right;
  return (
    <div className={styles.EditInfo} onClick={onClick} style={style}>
      <FontAwesomeIcon icon={faEdit} size="2x" className={styles.Icon} />
    </div>
  );
};

export default EditInfo;
