import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const navicon = this.props.currentUser ? 
        (<Link classname='navigationbar-icon' to='/discover' />
        ) : (
        <Link className='navigationbar-icon-2' to='/' />
        );

        const navigationbar = this.props.currentUser ? (
            <nav className="navigationbar-right">
              <Link className="navigationbar-item" to="/upload">Upload</Link>
              <Link className={`navigationbar-item navigationbar-profile`} to={`/users/${this.props.currentUser.id}`}>
                  <span className="navigationbar-profile-picture"></span>
                  {this.props.currentUser.username}
              </Link>
              <button onClick={this.props.logout}>Sign Out</button>
            </nav>
          ) : (
            <nav className="navigationbar-right">
              <button className="button-login" onClick={() => this.props.openModal('login')}>Sign In</button>
              <button onClick={() => this.props.openModal('signup')}>Create Account</button>
              <Link className="navigationbar-item" to="/upload">Upload</Link>
            </nav>
        );


        return (
            
            <header className="navigationbar">
            <div className="navigationbar-container">
                <nav className="navigationbar-left">
                {navicon}
                <Link className="navigationbar-item" to="/discover">Home</Link>
                </nav>
                {navigationbar}
            </div>
            </header>
        )
    }
}

export default NavigationBar;
    

