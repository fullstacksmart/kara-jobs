import React from 'react';
import ProfileLayout from '../../components/ProfileLayout';
import ProfileNav from '../../components/ProfileNav';
import ProfileMain from '../ProfileMain';

const Profile: React.FC<unknown> = () => {
  return <ProfileLayout nav={<ProfileNav />} main={<ProfileMain />} />;
};

export default Profile;
