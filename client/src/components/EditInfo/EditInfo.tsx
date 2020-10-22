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
  style?: React.CSSProperties;
}

const EditInfo: React.FC<
  EditInfoAttributes & React.HTMLAttributes<HTMLHtmlElement>
> = ({
  top,
  bottom = '0',
  left,
  right = '0',
  onClick,
  style,
}: EditInfoAttributes) => {
  const defaultStyle: Record<string, unknown> = {};
  if (top) defaultStyle.top = top;
  if (bottom) defaultStyle.bottom = bottom;
  if (left) defaultStyle.left = left;
  if (right) defaultStyle.right = right;

  style = style || defaultStyle;
  return (
    <div className={styles.EditInfo} onClick={onClick} style={style}>
      <FontAwesomeIcon icon={faEdit} size="2x" className={styles.Icon} />
    </div>
  );
};

export default EditInfo;
