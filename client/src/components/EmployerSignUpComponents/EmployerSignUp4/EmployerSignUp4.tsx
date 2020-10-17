import React, { useEffect, useState } from 'react';
// import styles from './EmployerSignUp4.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import RadioInput from '../../RadioInput';
import Checkbox from '../../Checkbox';

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
  const [talentMinGerman, setTalentMinGerman] = useState({});

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    if (
      employer &&
      employer.searchDoctor !== undefined &&
      employer.searchNurse !== undefined &&
      employer.searchOther !== undefined
    ) {
      setTalent({
        searchDoctor: employer.searchDoctor,
        searchNurse: employer.searchNurse,
        searchOther: employer.searchOther,
        // talentStudyStatus: talent.talentStudyStatus,
        // talentApprobStatus: talent.talentApprobStatus,
        // talentMinGerman: talent.talentMinGerman,
      });
    }
  }, []);

  const updateSession = (): void => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(
        Object.assign(employer, {
          searchDoctor: talent.searchDoctor,
          searchNurse: talent.searchNurse,
          searchOther: talent.searchOther,
        }),
      ),
    );
  };

  const handleChange = (identifier: string): void => {
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
        // talentStudyStatus: talent.talentStudyStatus,
      });
    } else if (identifier === 'Other') {
      setTalent({
        searchDoctor: talent.searchDoctor,
        searchNurse: talent.searchNurse,
        searchOther: !talent.searchOther,
        // talentStudyStatus: talent.talentStudyStatus,
      });
    } else if (identifier.includes('study')) {
      setTalentStudyStatus(
        {
          talentStudyStatus: parseInt(identifier.charAt(identifier.length - 1)),
        },
        () => updateSession,
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = { ...employer, ...talent };
    sessionStorage.setItem('employer', JSON.stringify(obj));
    // post to DB
    console.log(obj);
    history.push('/employer-signup-4');
  };

  return (
    <div>
      <p>
        Basierend auf Ihren Angaben sehen Talente welche Art von Personal Sie
        derzeit suchen. Umgekehrt werd
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
        {/* <p>Ausbildung / Studium bereits abgeschlossen?</p>
        <RadioInput
          labelText="Ja"
          id="Ja"
          name="Ja"
          value="Ja"
          checked={talent.talentStudyStatus === 'Ja'}
          onChange={() => handleChange('Ja')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="Nein"
          name="Nein"
          value="Nein"
          checked={talent.talentStudyStatus === 'Nein'}
          onChange={() => handleChange('Nein')}
        ></RadioInput>
        <RadioInput
          labelText="Egal"
          id="Egal"
          name="Egal"
          value="Egal"
          checked={talent.talentStudyStatus === 'Egal'}
          onChange={() => handleChange('Egal')}
        ></RadioInput> */}
      </Form>
      <Button type="submit" value="Submit" form="search-f">
        Weiter
      </Button>
    </div>
  );
};

export default EmployerSignUp4;
