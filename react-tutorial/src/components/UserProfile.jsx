import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return <h2>User: {user}</h2>;
};

export default UserProfile;
