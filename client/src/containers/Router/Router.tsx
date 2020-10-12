import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import SignUp from '../SignUp';
import Login from '../../components/Login';
import styles from './Router.module.scss';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import JobSearch from '../JobSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';

const Router: React.FC<unknown> = () => {
  const auth = useSelector<RootState>((state) => state.firebase.auth);
  const paths = isEmpty(auth) ? (
    <Route path="/signup" exact component={Home}></Route>
  ) : (
    <Route path="/jobsearch" exact component={JobSearch}></Route>
  );
  return !isLoaded(auth) ? (
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      {paths}
    </BrowserRouter>
  );
};

export default Router;
