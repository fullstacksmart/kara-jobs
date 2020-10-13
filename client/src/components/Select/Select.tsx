import React from 'react';
import styles from './Select.module.scss';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({
  className,
  ...props
}: SelectProps) => {
  return (
    <select
      className={className ? styles.Select + ' ' + className : styles.Select}
      {...props}
    >
      {props.children}
    </select>
  );
};

export default Select;
