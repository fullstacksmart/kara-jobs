import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';
import Landing from '../../components/Landing';

// interface HomeProps {}

const Home: React.FC<unknown> = () => {
  return <Landing></Landing>;
};

export default Home;
