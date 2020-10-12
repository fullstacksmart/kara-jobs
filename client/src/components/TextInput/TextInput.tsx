import React from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps {
  labelText: string;
  key: string;
}

const TextInput: React.FC<
  TextInputProps & React.HTMLAttributes<HTMLInputElement>
> = ({ labelText, key, ...props }: TextInputProps) => {
  return (
    <div className={styles.TextInput}>
      <label htmlFor={key}>{labelText}</label>
      <input type="text" id={key} name={key} {...props}></input>
    </div>
  );
};

export default TextInput;
