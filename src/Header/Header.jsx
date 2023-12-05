import { useContext} from 'react'
import { UserContext } from '../context/userContext'

const Header = () => {
  const { email } = useContext(UserContext);

  return (
    <div>
      <h2>User Info</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Header;
