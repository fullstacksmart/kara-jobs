import React, { useEffect, useState } from 'react';
// import styles from './EmployerSignUp4.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import RadioInput from '../../RadioInput';
import Checkbox from '../../Checkbox';

const EmployerSignUp4: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    searchDoctor: false,
    searchNurse: false,
    searchOther: false,
    // talentStudyStatus: '',
    // talentAprobStatus: '',
    // talentMinGerman: '',
  });
  // const [study, setStudy] = useState({
  //   talentStudyStatus: '',
  //   talentAprobStatus: '',
  //   talentMinGerman: '',
  // });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    if (employer && employer.searchDoctor !== undefined) {
      setInfo({
        searchDoctor: employer.searchDoctor,
        searchNurse: info.searchNurse,
        searchOther: info.searchOther,
        // talentStudyStatus: info.talentStudyStatus,
        // talentAprobStatus: info.talentAprobStatus,
        // talentMinGerman: info.talentMinGerman,
      });
    } else if (employer && employer.searchNurse !== undefined) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchNurse: employer.searchNurse,
        searchOther: info.searchOther,
        // talentStudyStatus: info.talentStudyStatus,
        // talentAprobStatus: info.talentAprobStatus,
        // talentMinGerman: info.talentMinGerman,
      });
    } else if (employer && employer.searchOther !== undefined) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchOther: employer.searchOther,
        searchNurse: info.searchNurse,
        // talentStudyStatus: info.talentStudyStatus,
        // talentAprobStatus: info.talentAprobStatus,
        // talentMinGerman: info.talentMinGerman,
      });
    } else if (employer && employer.talentStudyStatus !== undefined) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchOther: info.searchOther,
        searchNurse: info.searchNurse,
        // talentStudyStatus: employer.talentStudyStatus,
        // talentAprobStatus: info.talentAprobStatus,
        // talentMinGerman: info.talentMinGerman,
      });
    } else if (employer && employer.talentAprobStatus !== undefined) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchOther: info.searchOther,
        searchNurse: info.searchNurse,
        // talentStudyStatus: info.talentStudyStatus,
        // talentAprobStatus: employer.talentAprobStatus,
        // talentMinGerman: info.talentMinGerman,
      });
    } else if (employer && employer.talentAprobStatus !== undefined) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchOther: info.searchOther,
        searchNurse: info.searchNurse,
        // talentStudyStatus: info.talentStudyStatus,
        // talentAprobStatus: info.talentAprobStatus,
        // talentMinGerman: employer.talentMinGerman,
      });
    }
  }, []);

  const updateSession = (identifier: number): void => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(
        Object.assign(employer, {
          searchDoctor: identifier,
          searchNurse: identifier,
          searchOther: identifier,
        }),
      ),
    );
  };

  const handleChange = (identifier: number): void => {
    if (identifier === 1) {
      setInfo({
        searchDoctor: !info.searchDoctor,
        searchNurse: info.searchNurse,
        searchOther: info.searchOther,
        // talentStudyStatus: info.talentStudyStatus,
      });
    } else if (identifier === 2) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchNurse: !info.searchNurse,
        searchOther: info.searchOther,
        // talentStudyStatus: info.talentStudyStatus,
      });
    } else if (identifier === 3) {
      setInfo({
        searchDoctor: info.searchDoctor,
        searchNurse: info.searchNurse,
        searchOther: !info.searchOther,
        // talentStudyStatus: info.talentStudyStatus,
      });
    }
    updateSession(identifier);
    console.log(info);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem(
      'employer',
      JSON.stringify({
        ...employer,
        ...info,
      }),
    );
    // post to DB
    history.push('/employer-signup-4');
  };

  return (
    <div>
      <p>
        Basierend auf Ihren Angaben sehen Talente welche Art von Personal Sie
        derzeit suchen. Umgekehrt werd
      </p>
      <Form onSubmit={handleSubmit} id="search-form">
        <Checkbox
          labelText="Ärzte"
          id="Ärzte"
          name="Ärzte"
          value="Ärzte"
          checked={info.searchDoctor}
          onChange={() => handleChange(1)}
        ></Checkbox>
        <Checkbox
          labelText="Pflegepersonal"
          id="Pflegepersonal"
          name="Pflegepersonal"
          value="Pflegepersonal"
          checked={info.searchNurse}
          onChange={() => handleChange(2)}
        ></Checkbox>
        <Checkbox
          labelText="Sonstigen med. Personal"
          id="Sonstigen med. Personal"
          name="Sonstigen med. Personal"
          value="Sonstigen med. Personal"
          checked={info.searchOther}
          onChange={() => handleChange(3)}
        ></Checkbox>
        {/* <p>Ausbildung / Studium bereits abgeschlossen?</p>
        <RadioInput
          labelText="Ja"
          id="Ja"
          name="Ja"
          value="Ja"
          checked={info.talentStudyStatus === 'Ja'}
          onChange={() => handleChange('Ja')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="Nein"
          name="Nein"
          value="Nein"
          checked={info.talentStudyStatus === 'Nein'}
          onChange={() => handleChange('Nein')}
        ></RadioInput>
        <RadioInput
          labelText="Egal"
          id="Egal"
          name="Egal"
          value="Egal"
          checked={info.talentStudyStatus === 'Egal'}
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
