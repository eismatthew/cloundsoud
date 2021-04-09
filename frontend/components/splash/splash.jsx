import React from 'react';
import { Link } from 'react-router-dom';


const Splash = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
    <nav className="splash-login-signup">
      <button classname='button-login' onClick={() => openModal('login')}>Login</button>
      {/* &nbsp;or&nbsp; */}
      <button classname='button-signup' onClick={() => openModal('signup')}>Signup</button>
    <br/>
      

    </nav>
  );

    const personalGreeting = () => (
        <hgroup className="header-group">
          <h2 className="header-name">Welcome, {currentUser.username}!</h2>
          <button className="logout-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Splash;