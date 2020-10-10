import React, {useState} from 'react';
import styles from './TalentSignUp1.module.scss';
import {talent} from '../../../types/talent'

interface TalentSignUp1Props {
  talentHandler: Function,
  progressHandler: Function,
  talent: talent,
}


const TalentSignUp1: React.FC<TalentSignUp1Props> = (props: TalentSignUp1Props) => {
  const [info, setInfo] = useState({residence: '', zipCode: '', city: ''})

  const handleChange = (e: any) => {
    switch(e.target.id) {
      case 'residence':
        setInfo({ residence: e.target.value, zipCode: info.zipCode, city: info.city });
        break;
      case 'zipCode':
        setInfo({ residence: info.residence, zipCode: e.target.value, city: info.city });
        break;
      case 'city':
        setInfo({ residence: info.residence, zipCode: e.target.value, city: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    props.talentHandler(info)
    props.progressHandler(2)
  };


  return (
      <div className={styles.TalentSignUp1}>
        <p>{`Hallo ${props.talent.firstName} ${props.talent.lastName}, in ein paar
        Schritten kommst du zu deinem Profl`}</p>
        <form onSubmit={handleSubmit}>
          <label>Land*</label>
          <input
            type="text"
            id="residence"
            name="residence"
            onChange={handleChange}
          ></input>
          <label>Postleitzahl*</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            onChange={handleChange}
          ></input>
          <label>Region / Stadt*</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
          ></input>
          <button>Weiter</button>
        </form>
      </div>
  )
};

export default TalentSignUp1;
