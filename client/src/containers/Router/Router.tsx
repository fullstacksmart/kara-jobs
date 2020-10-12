import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import SignUp from '../SignUp';
import Login from '../../components/Login';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import JobSearch from '../JobSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
import TalentRegistration from '../../components/TalentRegistration';

const Router: React.FC<unknown> = () => {
  const auth = useSelector<RootState>((state) => state.firebase.auth);
  const paths = isEmpty(auth) ? (
    <Route path="/signup" exact component={SignUp}></Route>
  ) : (
    <Route path="/jobsearch" exact component={JobSearch}></Route>
  );
  return !isLoaded(auth) ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signedIn" exact component={Success}></Route>
      {paths}
    </BrowserRouter>
  );
};

export default Router;
