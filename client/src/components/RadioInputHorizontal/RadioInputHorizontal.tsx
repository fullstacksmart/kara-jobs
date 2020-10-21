import React from 'react';
import styles from './RadioInputHorizontal.module.scss';

interface RadioInputHorizontalProps {
  labelText: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

const RadioInputHorizontal: React.FC<
  RadioInputHorizontalProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  labelText,
  id,
  name,
  value,
  checked,
  onChange,
  ...props
}: RadioInputHorizontalProps) => {
  return (
    <div className={styles.RadioInputHorizontal}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      ></input>
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default RadioInputHorizontal;
