import React, { useState } from 'react';
import CancelSave from '../CancelSave';
import styles from './AboutMe.module.scss';

interface AboutMeAttributes {
  title: string;
}

const AboutMe: React.FC<AboutMeAttributes> = ({ title }: AboutMeAttributes) => {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState('some text about me');
  const [oldText, setOldText] = useState(text);

  const handleSubmit = (event: React.MouseEvent): void => {
    setEditable(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.currentTarget.value);
  };
  const rollBack = () => {
    setText(oldText);
    setEditable(false);
  };

  const editText = () => {
    setEditable(true);
    setOldText(text);
  };

  const textArea = editable ? (
    <>
      <textarea
        name="inputText"
        className={styles.TextBox}
        value={text}
        onChange={handleChange}
        maxLength={800}
      ></textarea>
      <div className={styles.ButtonContainer}>
        <CancelSave onSave={handleSubmit} onCancel={rollBack} />
      </div>
    </>
  ) : (
    <div className={styles.TextBox} onClick={editText}>
      <p>{text}</p>
    </div>
  );

  return (
    <div className={styles.AboutMe}>
      <h1>{title}</h1>
      {textArea}
    </div>
  );
};

export default AboutMe;
