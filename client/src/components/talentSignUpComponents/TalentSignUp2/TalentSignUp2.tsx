import React, { useState, useEffect } from 'react';
//import styles from './TalentSignUp2.module.scss';
import { Redirect } from 'react-router-dom';
import Form from '../../Form';
import RadioInput from '../../RadioInput';
import Button from '../../Button';

const TalentSignUp2: React.FC = () => {
  const [info, setInfo] = useState({ occupationId: '' });
  const [redirect, setRedirect] = useState(0);

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);
  console.log(talent);

  useEffect(() => {
    if (talent && talent.occupationId !== undefined) {
      const btn = document.getElementById(
        talent.occupationId,
      ) as HTMLInputElement;
      btn.checked = true;
    }
  }, []);

  const updateSession = (identifier: string): void => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(Object.assign(talent, { occupationId: identifier })),
    );
  };

  const handleOptionChange = (identifier: string): void => {
    setInfo({ occupationId: identifier });
    updateSession(identifier);
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify({
        ...talent,
        ...info,
      }),
    );
    // post to DB
    setRedirect(3);
  };

  if (redirect === 3) return <Redirect push to={`/talent-signup-3`} />;
  else if (redirect === 4) return <Redirect push to={`/talent-signup-4`} />;
  return (
    <div>
      <p>Welchen Job machst du derzeit?</p>
      <Form onSubmit={handleSubmit} id="occupationId-form">
        <RadioInput
          labelText="Krankenpfleger"
          id="0"
          name="0"
          value="0"
          checked={info.occupationId === '0'}
          onChange={() => handleOptionChange('0')}
        ></RadioInput>
        <RadioInput
          labelText="Arzt"
          id="1"
          name="1"
          value="1"
          checked={info.occupationId === '1'}
          onChange={() => handleOptionChange('1')}
        ></RadioInput>
        <RadioInput
          labelText="Sonsttiges med Personal z.B. Laborassistent od. Physiotherapeut"
          id="2"
          name="2"
          value="2"
          checked={info.occupationId === '2'}
          onChange={() => handleOptionChange('2')}
        ></RadioInput>
      </Form>
      <p onClick={() => setRedirect(4)}>Ich studiere noch</p>
      <Button type="submit" form="occupationId-form" value="Submit">
        Weiter
      </Button>
    </div>
  );
};

export default TalentSignUp2;
