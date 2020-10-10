import React from 'react';
import styles from './BlueWrapper.module.scss';

interface BlueWrapperProps {
  children: React.ReactNode;
}

const BlueWrapper: React.FC<BlueWrapperProps> = (props: BlueWrapperProps) => {
  return <div className={styles.BlueWrapper}>{props.children}</div>;
};

export default BlueWrapper;
