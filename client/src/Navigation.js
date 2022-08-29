import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation({ updateUser, currentUser }) {

  const handleLogOut = () => {
    fetch('/logout',{
      method:'DELETE'  
    })
    updateUser(false);
  };

  return (
    <header>
    <nav>
      <div>
        <button onClick={handleLogOut}>Log Out</button>
          <ul>
            <li>
              {currentUser ? <Link to={`/users/${currentUser.id}`}>Account</Link> : null }
            </li>
            <li>
              <Link to="/users/new">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contact_info/new"> Contact Information</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
      </div>
    </nav>
    </header>
  );
}

export default Navigation;