import { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user] = useState('Tony Stark');

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
