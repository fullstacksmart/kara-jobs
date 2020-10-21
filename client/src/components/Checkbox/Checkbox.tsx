import React from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  labelText: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  labelText,
  id,
  name,
  value,
  checked,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <div className={styles.Checkbox}>
      <input
        type="checkbox"
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

export default Checkbox;
