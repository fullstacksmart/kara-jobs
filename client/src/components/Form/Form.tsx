import React from 'react';
import styles from './Form.module.scss';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> = ({ className, ...props }: FormProps) => {
  return (
    <form
      className={className ? styles.Form + ' ' + className : styles.Form}
      {...props}
    >
      {props.children}
    </form>
  );
};

export default Form;
