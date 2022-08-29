import { NavLink } from "react-router-dom";
import {useHistory} from 'react-router-dom';


function Navigation({ updateUser, currentUser }) {
  const history = useHistory()


  const handleLogOut = () => {
    fetch('/logout',{
      method:'DELETE'  
    })
    updateUser(false);
    history.push("/");
  };

  return (
      <header className="headerbackground">
        <nav>
          <div className="navbar">
            {currentUser ? <NavLink exact className = "button" to={`/users/${currentUser.id}`}>Account</NavLink> : null }
            <NavLink exact className="button" to="/">
              Courses
            </NavLink>
            <NavLink exact className="button" to="/users/new">
              SignUp
            </NavLink>
            <NavLink exact className="button" to="/login">
              Login
            </NavLink>
            {currentUser ? <NavLink exact className="button" to= {`/contact_info/new`}> Contact Information </NavLink> : null }
            {currentUser ? <button onClick={handleLogOut}>Log Out</button> : null}
          </div>
        </nav>
      </header>
  );
}

export default Navigation;