import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const navicon = this.props.currentUser ? 
        (<Link classname='navbar-icon' to='/discover' />
        ) : (
        <Link className='navbar-icon' to='/' />
        );

        const navbar = this.props.currentUser ? (
            <nav className="navbar-right">
              <Link className="navbar-item" to="/upload">Upload</Link>
              <Link className={`navbar-item navbar-profile`} to="/">
                  <span className="navbar-profile-pic"></span>
                  {this.props.currentUser.username}
              </Link>
              <button onClick={this.props.logout}>Sign Out</button>
            </nav>
          ) : (
            <nav className="navbar-right">
              <button className="button-login" onClick={() => this.props.openModal('login')}>Sign In</button>
              <button onClick={() => this.props.openModal('signup')}>Create Account</button>
              <Link className="navbar-item" to="/upload">Upload</Link>
            </nav>
        );


        return (
            
            <header className="navbar">
            <div className="navbar-container">
                <nav className="navbar-left">
                {navicon}
                <Link className="navbar-item" to="/discover">Home</Link>
                </nav>
                {navbar}
            </div>
            </header>
        )
    }
}
    

