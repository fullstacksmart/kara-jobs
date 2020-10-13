import React, { useState } from 'react';
import styles from './TalentSignUp3.module.scss';
import { Redirect } from 'react-router-dom';
import Form from '../../Form';
import TextInput from '../../TextInput';
import Label from '../../Label';
import Option from '../../Option';
import Select from '../../Select';
import Button from '../../Button';

const optArray = ['Arbeitssuchend', 'Teilzeit', 'Vollzeit'];

const TalentSignUp3: React.FC = () => {
  const [info, setInfo] = useState({
    positionName: '',
    occupationStatusId: '',
    employerName: '',
  });
  const [redirect, setRedirect] = useState(0);

  // const handleChange = (identifier: string) => {};

  // const handleSubmit = () => {};

  if (redirect === 4) return <Redirect push to={`/talent-signup-4`} />;
  else if (redirect === 5) return <Redirect push to={`/talent-signup-5`} />;
  return (
    <div className={styles.TalentSignUp3}></div>
    //   <Form onSubmit={handleSubmit}>
    //     <TextInput
    //       id="positionName"
    //       labelText="Position*"
    //       onChange={(e) => handleChange(e)}
    //       onBlur={(e) => updateSession(e)}
    //     ></TextInput>
    //     <Label htmlFor="residence">Land*</Label>
    //     <Select
    //       id="occupationStatusId"
    //       value={info.occupationStatusId}
    //       onChange={handleChange}
    //       onBlur={(e) => updateSession(e)}
    //     >
    //       {optArray.map((opt) => (
    //         <Option key={opt} value={opt}>
    //           {opt}
    //         </Option>
    //       ))}
    //     </Select>
    //     <TextInput
    //       id="employerName"
    //       labelText="Letzter oder derzeitiger Arbeitgeber*"
    //       onChange={(e) => handleChange(e)}
    //       onBlur={(e) => updateSession(e)}
    //     ></TextInput>
    //   </Form>
    //   <p onClick={() => setRedirect(4)}>Ich studiere noch</p>
    //   <Button type="submit" form="occupationId-form" value="Submit">
    //     Weiter
    //   </Button>
    /* <form onSubmit={handleSubmit}>
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
      </form> */
  );
};

export default TalentSignUp3;
