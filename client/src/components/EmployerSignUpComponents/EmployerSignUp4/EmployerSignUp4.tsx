import React, { useEffect, useState } from 'react';
// import styles from './EmployerSignUp4.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import RadioInput from '../../RadioInput';
import Checkbox from '../../Checkbox';
import Select from '../../Select';
import Option from '../../Option';

const EmployerSignUp4: React.FC = () => {
  const history = useHistory();
  const [talent, setTalent] = useState({
    searchDoctor: false,
    searchNurse: false,
    searchOther: false,
  });
  const [talentStudyStatus, setTalentStudyStatus] = useState({
    talentStudyStatus: 0,
  });
  const [talentApprobStatus, setTalentApprobStatus] = useState({
    talentApprobStatus: 0,
  });
  const [talentMinGerman, setTalentMinGerman] = useState({
    talentMinGerman: '',
  });
  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  // const updateSession = (
  //   identifier: string | React.FormEvent<HTMLSelectElement>,
  // ): void => {
  //   // sessionStorage.setItem(
  //   //   'employer',
  //   //   JSON.stringify(
  //   //     Object.assign(employer, {
  //   //       searchDoctor: talent.searchDoctor,
  //   //       searchNurse: talent.searchNurse,
  //   //       searchOther: talent.searchOther,
  //   //     }),
  //   //   ),
  //   // );
  // };

  useEffect(() => {
    if (employer) {
      if (
        employer.searchDoctor !== undefined &&
        employer.searchNurse !== undefined &&
        employer.searchOther !== undefined
      ) {
        setTalent({
          searchDoctor: employer.searchDoctor,
          searchNurse: employer.searchNurse,
          searchOther: employer.searchOther,
        });
      }
      if (employer.talentStudyStatus !== undefined) {
        setTalentStudyStatus({ talentStudyStatus: employer.talentStudyStatus });
      }
      if (employer.talentMinGerman !== undefined) {
        setTalentMinGerman({ talentMinGerman: employer.talentMinGerman });
      }
    }
  }, []);

  const handleChange = (
    identifier: string | React.FormEvent<HTMLSelectElement>,
  ): void => {
    if (typeof identifier === 'string') {
      if (identifier === 'Ärzte') {
        setTalent({
          searchDoctor: !talent.searchDoctor,
          searchNurse: talent.searchNurse,
          searchOther: talent.searchOther,
        });
      } else if (identifier === 'Pflegepersonal') {
        setTalent({
          searchDoctor: talent.searchDoctor,
          searchNurse: !talent.searchNurse,
          searchOther: talent.searchOther,
        });
      } else if (identifier === 'Other') {
        setTalent({
          searchDoctor: talent.searchDoctor,
          searchNurse: talent.searchNurse,
          searchOther: !talent.searchOther,
        });
      } else if (identifier.includes('study')) {
        setTalentStudyStatus({
          talentStudyStatus: parseInt(identifier.charAt(identifier.length - 1)),
        });
      } else if (identifier.includes('approb')) {
        setTalentApprobStatus({
          talentApprobStatus: parseInt(
            identifier.charAt(identifier.length - 1),
          ),
        });
      }
    } else {
      setTalentMinGerman({
        talentMinGerman: identifier.currentTarget.value,
      });
    }
    //updateSession(identifier);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = { ...employer, ...talent };
    sessionStorage.setItem('employer', JSON.stringify(obj));
    // post to DB
    console.log(obj);
    history.push('/employer-signup-4');
  };

  const optArray = ['low', 'medium', 'high'];

  return (
    <div>
      <p>
        Basierend auf Ihren Angaben sehen Talente welche Art von Personal Sie 
        derzeit suchen. Umgekehrt werden Ihnen nur Bewerber angezeigt, die die
        nötigen Vorgaben erfüllen.
      </p>
      <p>Sie können die Auswahl in Ihrem Profil jederzeit ändern.</p>
      <p>
        Sie suchen zur Verstärkung ihrer Einrichtung (Mehrfachauswahl möglich):
      </p>
      <Form onSubmit={handleSubmit} id="search-f">
        <Checkbox
          labelText="Ärzte"
          id="Ärzte"
          name="Ärzte"
          value="Ärzte"
          checked={talent.searchDoctor}
          onChange={() => handleChange('Ärzte')}
        ></Checkbox>
        <Checkbox
          labelText="Pflegepersonal"
          id="Pflegepersonal"
          name="Pflegepersonal"
          value="Pflegepersonal"
          checked={talent.searchNurse}
          onChange={() => handleChange('Pflegepersonal')}
        ></Checkbox>
        <Checkbox
          labelText="Sonstigen med. Personal"
          id="Other"
          name="Sonstigen med. Personal"
          value="Sonstigen med. Personal"
          checked={talent.searchOther}
          onChange={() => handleChange('Other')}
        ></Checkbox>
        <p>Ausbildung / Studium bereits abgeschlossen?</p>
        <RadioInput
          labelText="Ausbildung / Studium bereits abgeschlossen?"
          id="1"
          name="1"
          value="1"
          checked={talentStudyStatus.talentStudyStatus === 1}
          onChange={() => handleChange('study-1')}
        ></RadioInput>
        <RadioInput
          labelText="Arzt"
          id="2"
          name="2"
          value="2"
          checked={talentStudyStatus.talentStudyStatus === 2}
          onChange={() => handleChange('study-2')}
        ></RadioInput>
        <RadioInput
          labelText="Sonstiges med Personal z.B. Laborassistent od. Physiotherapeut"
          id="3"
          name="3"
          value="3"
          checked={talentStudyStatus.talentStudyStatus === 3}
          onChange={() => handleChange('study-3')}
        ></RadioInput>
        <p>Anerkennungs / Approbationsbescheid bereits vorliegend?</p>
        <RadioInput
          labelText="Ja"
          id="4"
          name="4"
          value="4"
          checked={talentApprobStatus.talentApprobStatus === 1}
          onChange={() => handleChange('approb-1')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="5"
          name="5"
          value="5"
          checked={talentApprobStatus.talentApprobStatus === 2}
          onChange={() => handleChange('approb-2')}
        ></RadioInput>
        <RadioInput
          labelText="Laufend"
          id="6"
          name="6"
          value="6"
          checked={talentApprobStatus.talentApprobStatus === 3}
          onChange={() => handleChange('approb-3')}
        ></RadioInput>
        <RadioInput
          labelText="Egal"
          id="7"
          name="7"
          value="7"
          checked={talentApprobStatus.talentApprobStatus === 4}
          onChange={() => handleChange('approb-4')}
        ></RadioInput>
        <p>
          Minimum Deutschkenntnisse (wenn nicht durch Anerkennung bereits
          erfüllt)
        </p>
        <Select
          id="german-level"
          value={talentMinGerman.talentMinGerman}
          onChange={(e) => handleChange(e)}
          //onBlur={(e) => updateSession(e)}
          required
        >
          {optArray.map((opt) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
      </Form>
      <Button type="submit" value="Submit" form="search-f">
        Weiter
      </Button>
    </div>
  );
};

export default EmployerSignUp4;
