import React, { useState, useEffect } from 'react';
// import styles from './TalentSignUp1.module.scss';
import Form from '../../Form';
import Select from '../../Select';
import Button from '../../Button';
import Label from '../../Label';
import Option from '../../Option';
import TextInput from '../../TextInput';
import { Redirect } from 'react-router-dom';

const TalentSignUp1: React.FC = () => {
  const [info, setInfo] = useState({ residence: '', zipCode: '', city: '' });
  const [redirect, setRedirect] = useState(0);

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  useEffect(() => {
    const residence = document.getElementById('residence') as HTMLInputElement;
    const zipCode = document.getElementById('zipCode') as HTMLInputElement;
    const city = document.getElementById('city') as HTMLInputElement;
    if (talent) {
      if (talent.zipCode !== undefined) zipCode.value = talent.zipCode;
      if (talent.city !== undefined) city.value = talent.city;
      //TO DO: Change residence in Talent and update correctly here
      if (talent.residence !== undefined) residence.value = talent.residence;
    }
  }, []);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    console.log(e.currentTarget.id);
    switch (e.currentTarget.id) {
      case 'residence':
        setInfo({
          residence: e.currentTarget.value,
          zipCode: info.zipCode,
          city: info.city,
        });
        break;
      case 'zipCode':
        setInfo({
          residence: info.residence,
          zipCode: e.currentTarget.value,
          city: info.city,
        });
        break;
      case 'city':
        setInfo({
          residence: info.residence,
          zipCode: info.zipCode,
          city: e.currentTarget.value,
        });
        break;
      default:
        break;
    }
  };

  const updateSession = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>,
  ) => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(
        Object.assign(talent, { [e.currentTarget.id]: e.currentTarget.value }),
      ),
    );
  };

  const handleSubmit = () => {
    //TO DO: map country values and save isCode to DB and session mgmt
    sessionStorage.setItem(
      'talent',
      JSON.stringify({
        ...talent,
        ...info,
      }),
    );
    // post to DB
    setRedirect(2);
  };

  const optArray = [
    ['id1', 'country1'],
    ['id2', 'country2'],
    ['id3', 'country3'],
  ];

  if (redirect === 2) return <Redirect push to={`/talent-signup-2`} />;
  else {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="residence">Land*</Label>
          <Select
            id="residence"
            value={info.residence}
            onChange={handleChange}
            onBlur={(e) => updateSession(e)}
          >
            {optArray.map((opt) => (
              <Option key={opt[0]} value={opt[1]}>
                {opt[1]}
              </Option>
            ))}
          </Select>
          <TextInput
            id="zipCode"
            labelText="Postleitzahl"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => updateSession(e)}
          ></TextInput>
          <TextInput
            id="city"
            labelText="Region / Stadt"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => updateSession(e)}
          ></TextInput>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
};
export default TalentSignUp1;
