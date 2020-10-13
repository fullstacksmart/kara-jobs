import React, { useState } from 'react';
// import styles from './TalentSignUp1.module.scss';
// import { Talent } from '../../../types/talent';
// import TextInput from '../../TextInput';
import Form from '../../Form';
import Select from '../../Select';
import Button from '../../Button';
import Label from '../../Label';
import Option from '../../Option';
import TextInput from '../../TextInput';

const TalentSignUp1: React.FC = () => {
  const [info, setInfo] = useState({
    isoCode: '',
    residence: '',
    zipCode: '',
    city: '',
  });
  const [selectedValue, setSelectedValue] = useState({
    selectedValue: 'country1',
  });
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  const handleSelectChange = (e: any): void => {
    console.log(e.target.value);
    setSelectedValue({
      selectedValue: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('selected', selectedValue);
    console.log(info);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   switch (e.target.id) {
  //     case 'residence':
  //       setInfo({
  //         residence: e.target.value,
  //         zipCode: info.zipCode,
  //         city: info.city,
  //       });
  //       break;
  //     case 'zipCode':
  //       setInfo({
  //         residence: info.residence,
  //         zipCode: e.target.value,
  //         city: info.city,
  //       });
  //       break;
  //     case 'city':
  //       setInfo({
  //         residence: info.residence,
  //         zipCode: e.target.value,
  //         city: e.target.value,
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const optArray = [
    ['id1', 'country1'],
    ['id2', 'country2'],
    ['id3', 'country3'],
  ];

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="countries">Land*</Label>
        <Select
          value={selectedValue.selectedValue}
          onChange={(e) => handleSelectChange(e.target.id)}
        >
          {optArray.map((opt) => (
            <Option key={opt[0]} value={opt[0]}>
              {opt[1]}
            </Option>
          ))}
        </Select>
        <TextInput id="zipCode" labelText="Postleitzahl"></TextInput>
        <TextInput id="city" labelText="Region / Stadt"></TextInput>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};
export default TalentSignUp1;
