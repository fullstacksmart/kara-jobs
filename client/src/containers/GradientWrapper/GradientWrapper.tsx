import React from 'react';
import styles from './GradientWrapper.module.scss';

interface GradientWrapperProps {
  children: React.ReactNode;
}

const GradientWrapper: React.FC<GradientWrapperProps> = (
  props: GradientWrapperProps,
) => {
  return <div className={styles.GradientWrapper}>{props.children}</div>;
};

export default GradientWrapper;
