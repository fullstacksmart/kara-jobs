import React, {useState} from 'react';
import styles from './TalentSignUp0.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper'

interface TalentSignUp0Props {
  talentHandler: Function,
  progressHandler: Function,
}



const TalentSignUp0: React.FC<TalentSignUp0Props> = (props: TalentSignUp0Props) => {
  const [info, setInfo] = useState({firstName: '', lastName: ''})

  const handleChange = (e: any) => {
    if (e.target.id === 'firstName') {
      setInfo({ firstName: e.target.value, lastName: info.lastName });
    } else if (e.target.id === 'lastName') {
      setInfo({ firstName: info.firstName, lastName: e.target.value });
    }
  };

  const handleSubmit = () => {
    props.talentHandler(info)
    props.progressHandler(1)
  };

  return (
    <BlueWrapper>
      <div className={styles.TalentSignUp0}>
        <form onSubmit={handleSubmit}>
          <label>Vorname*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          ></input>
          <label>Nachname*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
          ></input>
          <button>Weiter</button>
        </form>
      </div>
    </BlueWrapper>
  )
};

export default TalentSignUp0;
