import React, {useState} from 'react';
import styles from './TalentSignUp0.module.scss';

interface TalentSignUp0Props {
  talentHandler: Function,
  progessHandler: Function,
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
    props.progessHandler(1)
  };

  return (
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
  )
};

export default TalentSignUp0;
