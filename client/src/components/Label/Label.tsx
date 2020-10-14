import React from 'react';
import styles from './Label.module.scss';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ className, ...props }: LabelProps) => {
  return (
    <label
      className={className ? styles.Label + ' ' + className : styles.Label}
      {...props}
    >
      {props.children}
    </label>
  );
};

export default Label;
