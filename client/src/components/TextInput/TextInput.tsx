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
      <label htmlFor={id}>{labelText}</label>
      <input
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
