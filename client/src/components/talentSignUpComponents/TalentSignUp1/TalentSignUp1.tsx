import React, { useState } from 'react';
// import styles from './TalentSignUp1.module.scss';
import Form from '../../Form';
import Select from '../../Select';
import Button from '../../Button';
import Label from '../../Label';
import Option from '../../Option';
import TextInput from '../../TextInput';
import { Redirect } from 'react-router-dom';

const TalentSignUp1: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('country1');
  const [textInputs, setTextInputs] = useState({
    zipCode: '',
    city: '',
  });
  const [redirect, setRedirect] = useState(0);

  //TO DO update:
  const countryValues = { isoCode: 'id1', residence: 'country1' };

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.id);
    setSelectedValue(e.currentTarget.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.id);
    switch (e.target.id) {
      case 'zipCode':
        setTextInputs({
          zipCode: e.target.value,
          city: textInputs.city,
        });
        break;
      case 'city':
        setTextInputs({
          zipCode: textInputs.zipCode,
          city: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const updateSessionSelect = (e: React.FocusEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    sessionStorage.setItem(
      'talent',
      JSON.stringify({ ...talent, ...countryValues }),
    );
  };

  const updateSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(Object.assign(talent, { [e.target.id]: e.target.value })),
    );
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify({
        ...talent,
        ...textInputs,
        ...countryValues,
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

  if (redirect === 2) return <Redirect to={`/talent-signup-2`} />;
  else {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="countries">Land*</Label>
          <Select
            id="countries"
            value={selectedValue}
            onChange={(e) => handleSelectChange(e)}
            onBlur={(e) => updateSessionSelect(e)}
          >
            {optArray.map((opt) => (
              <Option key={opt[0]} value={opt[0]}>
                {opt[1]}
              </Option>
            ))}
          </Select>
          <TextInput
            id="zipCode"
            labelText="Postleitzahl"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="city"
            labelText="Region / Stadt"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
};
export default TalentSignUp1;
