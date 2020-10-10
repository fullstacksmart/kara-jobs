import React, { useState } from 'react';
import styles from './TalentSignUp3.module.scss';

interface TalentSignUp3Props {
  talentHandler: (obj: unknown) => void;
  progressHandler: (num: number) => void;
}

const TalentSignUp3: React.FC<TalentSignUp3Props> = ({
  talentHandler,
  progressHandler,
}: TalentSignUp3Props) => {
  const [info, setInfo] = useState({
    positionName: '',
    occupationStatusId: '',
    employerName: '',
  });

  // const handleChange = (identifier: string) => {};

  // const handleSubmit = () => {};

  return (
    <div className={styles.TalentSignUp3}>
      {/* <form onSubmit={handleSubmit}>
				<label>Position*</label>
          <input
            type="text"
            id="residence"
            name="residence"
            onChange={() => handleChange('')}
          ></input>
          <label>Derzeitiges Beschäftigungsverhältnis*</label>
					<select id="cars" name="cars" onChange={handleChange}>
  					<option value="volvo">Arbeitssuchend</option>
  					<option value="saab">Teilzeit</option>
  					<option value="fiat">Vollzeit</option>
					</select>
          <label>Letzter oder derzeitiger Arbeitgeber*</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={() => handleChange('')}
          ></input>
					<label>Ich studiere noch</label>
          <input
            type="radio"
            id="studying"
            name="studying"
            onChange={() => handleChange('studying')}
          ></input>
				<button>Weiter</button>
      </form> */}
    </div>
  );
};

export default TalentSignUp3;
