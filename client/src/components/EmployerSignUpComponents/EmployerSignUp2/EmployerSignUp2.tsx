import React from 'react';
import styles from './EmployerSignUp2.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';

const EmployerSignUp2: React.FC<unknown> = (props: unknown) => {
  return (
    <BlueWrapper>
      <div className={styles.EmployerSignUp2}>
        <form>
          <TextInput
            id="street"
            labelText="Straße*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="streetNumber"
            labelText="Haus-Nr.*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="addressAditional"
            labelText="Adresszusatz"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="zipCode"
            labelText="Postleitzahl*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="city"
            labelText="Region / Stadt*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="website"
            labelText="Website"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <Button>Weiter</Button>
        </form>
      </div>
    </BlueWrapper>
  );
};

export default EmployerSignUp2;
