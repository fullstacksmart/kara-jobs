import React from 'react';
import styles from './Option.module.scss';

export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

const Option: React.FC<OptionProps> = ({
  className,
  ...props
}: OptionProps) => {
  return (
    <option
      className={className ? styles.Option + ' ' + className : styles.Option}
      {...props}
    >
      {props.children}
    </option>
  );
};

export default Option;
