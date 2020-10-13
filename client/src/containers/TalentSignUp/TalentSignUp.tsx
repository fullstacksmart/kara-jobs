import React, { useEffect, Dispatch } from 'react';
import styles from './TalentSignUp.module.scss';
import { TalentInfo } from '../../types/signup';
import { useSelector, useDispatch } from 'react-redux';
import { TalentActions } from '../../services/actions/talentActions';
import { RootState } from '../../services/reducers';
import { Redirect } from 'react-router-dom';

//TO DO: replace
const uid = '123';
const email = 'test@gmail.com';
const onboarding_status = 0;

// const auth: unknown = useSelector<RootState>((state) => state.firebase.auth);
//   const talent: Talent = useSelector<RootState>(
//     (state: RootState) => state.talent,
//   ) as Talent;

interface TalentSignUpProps {
  talentInfo: TalentInfo;
}

const TalentSignUp: React.FC<TalentSignUpProps> = (
  props: TalentSignUpProps,
) => {
  //session mgmt filled ?
  //--> redirect to right page, after submit: update redux, session mgmt and post to DB :
  //DB ? --> redirect right page, update session mgmt immediately (using firebase uid); after submit: update redux, session mgmt and post to DB :
  //redirect to 1st page, update session mgmt with uid and email immediately (using firebase uid); after submit: update, redux, session mgmt and post to DB,

  //after each page: update session mgmt, update redux, post to DB;

  //Update Session Mgmt and Redux and post to DB
  //then link to next page

  //update session mgmt
  // sessionStorage.setItem(
  //   'talent',
  //   JSON.stringify(
  //     Object.assign(talent, {
  //       uid: JSON.stringify(auth),
  //       email: JSON.stringify(auth),
  //       onboarding_status: 1,
  //     }),
  //   ),
  // );

  //update redux
  // const talentDispatch = useDispatch<Dispatch<TalentActions>>();
  // talentDispatch({
  //   type: 'ADD_TALENT',
  //   payload: Object.assign(talent, { uid: '123', email: 'test@gmail.com' }),
  // });

  sessionStorage.setItem(
    'talent',
    JSON.stringify({
      uid: uid,
      email: email,
      onboarding_status: onboarding_status,
    }),
  );

  return (
    <>
      <Redirect to={`/talent-signup-${onboarding_status}`} />
    </>
  );
};

export default TalentSignUp;
