import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';

// interface HomeProps {}

//REDUX
import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/reducers';
import { TalentActions } from '../../services/actions/talentActions';

const Home: React.FC<unknown> = () => {
  const talent = useSelector((state: RootState) => state.talent);
  console.log(talent);
  const talentDispatch = useDispatch<Dispatch<TalentActions>>();

  talentDispatch({
    type: 'ADD_TALENT',
    payload: {
      uid: '123',
      email: '123',
      firstName: '123',
      lastName: '123',
      isoCode: '123',
      residence: '123',
      zipCode: '123',
      city: '123',
      occupationId: '123',
      positionName: '123',
      occupationStatusId: '123',
      employerName: '123',
      studyProgram: '123',
      university: '123',
      expectedGraduationYear: '123',
    },
  });

  console.log(talent);

  return (
    <div className={styles.Home}>
      <nav className={styles.NavBar}>
        <Login />
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </nav>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
