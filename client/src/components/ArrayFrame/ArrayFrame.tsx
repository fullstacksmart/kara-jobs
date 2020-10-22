import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ArrayFrame.module.scss';

interface ArrayFrameProps {
  items?: React.ReactNode[];
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  header: string;
}

const ArrayFrame: React.FC<ArrayFrameProps> = ({
  header,
  items,
  onClick,
}: ArrayFrameProps) => {
  const list =
    items?.map((item) => {
      <div className={styles.item}>{item}</div>;
    }) || [];
  return (
    <div className={styles.ArrayFrame}>
      <div className={styles.HeaderInset}>
        <h1>{header}</h1>
        <div>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="2x"
            onClick={onClick}
            className={styles.PlusButton}
          />
        </div>
      </div>
      {list.length ? <div className={styles.Border}>{items}</div> : <></>}
    </div>
  );
};

export default ArrayFrame;
