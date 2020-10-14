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
  const [info, setInfo] = useState({
    isoCode: '',
    residence: '',
    zipCode: '',
    city: '',
  });
  const [redirect, setRedirect] = useState(0);

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  useEffect(() => {
    const zipCodeHTML = document.getElementById('zipCode') as HTMLInputElement;
    const cityHTML = document.getElementById('city') as HTMLInputElement;
    if (talent) {
      if (talent.zipCode !== undefined) zipCodeHTML.value = talent.zipCode;
      if (talent.city !== undefined) cityHTML.value = talent.city;
      if (talent.residence !== undefined && talent.isoCode !== undefined)
        setInfo({
          isoCode: talent.isoCode,
          residence: talent.residence,
          zipCode: talent.zipCode,
          city: talent.city,
        });
      //residenceHTML.value = `${talent.isoCode},${talent.residence}`;
    }
  }, []);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    switch (e.currentTarget.id) {
      case 'residence':
        setInfo({
          isoCode: e.currentTarget.value.split(',')[0],
          residence: e.currentTarget.value.split(',')[1],
          zipCode: info.zipCode,
          city: info.city,
        });
        break;
      case 'zipCode':
        setInfo({
          isoCode: info.isoCode,
          residence: info.residence,
          zipCode: e.currentTarget.value,
          city: info.city,
        });
        break;
      case 'city':
        setInfo({
          isoCode: info.isoCode,
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
    if (e.currentTarget.id === 'residence') {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(
          Object.assign(talent, {
            isoCode: e.currentTarget.value.split(',')[0],
            residence: e.currentTarget.value.split(',')[1],
          }),
        ),
      );
    } else {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(
          Object.assign(talent, {
            [e.currentTarget.id]: e.currentTarget.value,
          }),
        ),
      );
    }
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
    // post to DB (only relevant props from this page)
    setRedirect(2);
  };

  const optArray = ['id1,country1', 'id2,country2', 'id3,country3'];

  if (redirect === 2) return <Redirect push to={`/talent-signup-2`} />;
  else {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="residence">Land*</Label>
          <Select
            id="residence"
            value={`${info.isoCode},${info.residence}`}
            onChange={handleChange}
            onBlur={(e) => updateSession(e)}
          >
            {optArray.map((opt) => (
              <Option key={opt.split(',')[0]} value={opt}>
                {opt.split(',')[1]}
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
