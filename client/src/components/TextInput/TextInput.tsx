import React from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps {
  labelText: string;
  id: string;
  required?: boolean;
}

const TextInput: React.FC<
  TextInputProps & React.HTMLAttributes<HTMLInputElement>
> = ({ labelText, id, required, ...props }: TextInputProps) => {
  return (
    <div className={styles.TextInput}>
      <div className={styles.Label}>
        <label htmlFor={id}>{labelText}</label>
      </div>
      <input
        className={styles.Input}
        type="text"
        id={id}
        name={id}
        required={required}
        {...props}
      ></input>
    </div>
  );
};

export default TextInput;
