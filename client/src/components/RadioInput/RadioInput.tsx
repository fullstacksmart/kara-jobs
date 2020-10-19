import React from 'react';
import styles from './RadioInput.module.scss';

interface RadioInputProps {
  labelText: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

const RadioInput: React.FC<RadioInputProps> = ({
  labelText,
  id,
  name,
  value,
  checked,
  onChange,
  ...props
}: RadioInputProps) => {
  return (
    <div className={styles.RadioInput}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      ></input>
      <br />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default RadioInput;
