import React from 'react';
import ProfileLayout from '../../components/ProfileLayout';
import ProfileNav from '../../components/ProfileNav';

const Profile: React.FC<unknown> = () => {
  return <ProfileLayout nav={<ProfileNav />} />;
};

export default Profile;
