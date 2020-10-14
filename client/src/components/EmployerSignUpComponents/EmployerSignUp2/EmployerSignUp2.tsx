import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp2.module.scss';
import { Redirect } from 'react-router-dom';
import TextInput from '../../TextInput';
import Form from '../../Form';
import Button from '../../Button';

const EmployerSignUp2: React.FC = () => {
  const [info, setInfo] = useState({
    street: '',
    streetNumber: '',
    addressAdditional: '',
    zipCode: '',
    city: '',
    website: '',
  });
  const [redirect, setRedirect] = useState(0);

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    const street = document.getElementById('street') as HTMLInputElement;
    const streetNumber = document.getElementById(
      'streetNumber',
    ) as HTMLInputElement;
    const addressAdditional = document.getElementById(
      'addressAdditional',
    ) as HTMLInputElement;
    const zipCode = document.getElementById('zipCode') as HTMLInputElement;
    const city = document.getElementById('city') as HTMLInputElement;
    const website = document.getElementById('website') as HTMLInputElement;
    if (employer) {
      if (employer.street !== undefined) street.value = employer.street;
      if (employer.streetNumber !== undefined)
        streetNumber.value = employer.streetNumber;
      if (employer.addressAdditional !== undefined)
        addressAdditional.value = employer.addressAdditional;
      if (employer.zipCode !== undefined) zipCode.value = employer.zipCode;
      if (employer.city !== undefined) city.value = employer.city;
      if (employer.website !== undefined) website.value = employer.website;
    }
  }, []);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    switch (e.currentTarget.id) {
      case 'street':
        setInfo({
          street: e.currentTarget.value,
          streetNumber: info.streetNumber,
          addressAdditional: info.addressAdditional,
          zipCode: info.zipCode,
          city: info.city,
          website: info.website,
        });
        break;
      case 'streetNumber':
        setInfo({
          street: info.street,
          streetNumber: e.currentTarget.value,
          addressAdditional: info.addressAdditional,
          zipCode: info.zipCode,
          city: info.city,
          website: info.website,
        });
        break;
      case 'addressAdditional':
        setInfo({
          street: info.street,
          streetNumber: info.streetNumber,
          addressAdditional: e.currentTarget.value,
          zipCode: info.zipCode,
          city: info.city,
          website: info.website,
        });
        break;
      case 'zipCode':
        setInfo({
          street: info.street,
          streetNumber: info.streetNumber,
          addressAdditional: info.addressAdditional,
          zipCode: e.currentTarget.value,
          city: info.city,
          website: info.website,
        });
        break;
      case 'city':
        setInfo({
          street: info.street,
          streetNumber: info.streetNumber,
          addressAdditional: info.addressAdditional,
          zipCode: info.zipCode,
          city: e.currentTarget.value,
          website: info.website,
        });
        break;
      case 'website':
        setInfo({
          street: info.street,
          streetNumber: info.streetNumber,
          addressAdditional: info.addressAdditional,
          zipCode: info.zipCode,
          city: info.city,
          website: e.currentTarget.value,
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
      'employer',
      JSON.stringify(
        Object.assign(employer, {
          [e.currentTarget.id]: e.currentTarget.value,
        }),
      ),
    );
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify({
        ...employer,
        ...info,
      }),
    );
    setRedirect(3);
  };

  if (redirect === 3) return <Redirect push to={`/employer-signup-3`} />;
  else if (redirect === 4) return <Redirect push to={`/employer-signup-4`} />;
  return (
    <div className={styles.EmployerSignUp2}>
      <Form onSubmit={handleSubmit}>
        <TextInput
          id="street"
          labelText="Straße*"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <TextInput
          id="streetNumber"
          labelText="Haus-Nr.*"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <TextInput
          id="addressAdditional"
          labelText="Adresszusatz"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <TextInput
          id="zipCode"
          labelText="Postleitzahl*"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <TextInput
          id="city"
          labelText="Region / Stadt*"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <TextInput
          id="website"
          labelText="Website"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <Button>Weiter</Button>
      </Form>
    </div>
  );
};

export default EmployerSignUp2;
