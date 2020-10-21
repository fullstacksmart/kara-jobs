import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp1.module.scss';
import Form from '../../Form';
import Select from '../../Select';
import Button from '../../Button';
import Label from '../../Label';
import Option from '../../Option';
import TextInput from '../../TextInput';
import BlueWrapper from '../../../containers/BlueWrapper';
import ProgressBar from '../../ProgressBarTalent';
import logo from '../../../assets/logos/kara_gradient.png';
import { useHistory } from 'react-router-dom';
import dbService from '../../../services/dbService';
import { Talent } from '../../../types/talent';

const TalentSignUp1: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    isoCode: 'id1',
    country: 'country1',
    zipCode: '',
    city: '',
  });

  const talent = JSON.parse(
    sessionStorage.getItem('talent') as string,
  ) as Talent;

  useEffect(() => {
    const zipCodeHTML = document.getElementById('zipCode') as HTMLInputElement;
    const cityHTML = document.getElementById('city') as HTMLInputElement;
    if (talent) {
      if (talent.zipCode) zipCodeHTML.value = talent.zipCode;
      if (talent.city) cityHTML.value = talent.city;
      setInfo({
        isoCode: talent.isoCode ? talent.isoCode : 'id1',
        country: talent.country ? talent.country : 'country1',
        zipCode: zipCodeHTML.value,
        city: cityHTML.value,
      });
    }
  }, []);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    switch (e.currentTarget.id) {
      case 'country':
        setInfo({
          isoCode: e.currentTarget.value.split(',')[0],
          country: e.currentTarget.value.split(',')[1],
          zipCode: info.zipCode,
          city: info.city,
        });
        break;
      case 'zipCode':
        setInfo({
          isoCode: info.isoCode,
          country: info.country,
          zipCode: e.currentTarget.value,
          city: info.city,
        });
        break;
      case 'city':
        setInfo({
          isoCode: info.isoCode,
          country: info.country,
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
    if (e.currentTarget.id === 'country') {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(
          Object.assign(talent, {
            isoCode: e.currentTarget.value.split(',')[0],
            country: e.currentTarget.value.split(',')[1],
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const talentObj: Talent = {
      ...talent,
      ...info,
      onboardingPage: 2,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentObj));
    dbService
      .postSignup(`/talents/${talentObj.id}/signup`, talentObj)
      .then((res) => console.log(res));
    history.push('/talent-signup-2');
  };

  const optArray = ['id1,country1', 'id2,country2', 'id3,country3'];

  return (
    <BlueWrapper>
      <div className={styles.TalentSignUp1}>
        <div className={styles.FormHeader}>
          <img src={logo} className={styles.Logo} />
          <ProgressBar profil={true} anerkennung={false} dokumente={false} />
          <div className={styles.Text}>
            Hallo {talent.firstName} {talent.lastName}, in ein paar Schritten
            kommst du zu deinem Profil
          </div>
        </div>
        <div className={styles.FormWrapper}>
          <Form
            onSubmit={handleSubmit}
            id="country-form"
            className={styles.Form}
          >
            <div className={styles.DropDownWrapper}>
              <Label htmlFor="country" className={styles.DropDownLabel}>
                Land*
              </Label>
              <Select
                id="country"
                value={`${info.isoCode},${info.country}`}
                onChange={handleChange}
                onBlur={(e) => updateSession(e)}
              >
                {optArray.map((opt) => (
                  <Option key={opt.split(',')[0]} value={opt}>
                    {opt.split(',')[1]}
                  </Option>
                ))}
              </Select>
            </div>
            <TextInput
              id="zipCode"
              labelText="Postleitzahl*"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => updateSession(e)}
              required={true}
            ></TextInput>
            <TextInput
              id="city"
              labelText="Region / Stadt*"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => updateSession(e)}
              required={true}
            ></TextInput>
          </Form>
          <div className={styles.ButtonWrapper}>
            <Button onClick={() => history.push('/talent-signup-0')}>
              Zurück
            </Button>
            <Button type="submit" value="Submit" form="country-form">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </BlueWrapper>
  );
};
export default TalentSignUp1;
