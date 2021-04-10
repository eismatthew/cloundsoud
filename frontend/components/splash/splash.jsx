import React from 'react';
import { Link } from 'react-router-dom';



const Splash = ({ currentUser, logout, openModal, loginDemoUser }) => {
   
    


    const sessionLinks = () => (
        currentUser ? (
            <nav className="splash-login-signup">
                <button className="button-logout" onClick={logout}>Log Out</button>
            </nav>
        ) : (
            <nav className="splash-login-signup">
            <button className='button-login' onClick={() => openModal('login')}>Sign In</button>
            <button className='button-signup' onClick={() => openModal('signup')}>Create Account</button>
            
            <button className="button-demo" onClick={() => loginDemoUser()}>Demo Login</button>
            <br/>
            </nav>
        )

    );

    const personalGreeting = () => (
        <nav className="splash-greeting">
          <h5 className="splash-header-message">Welcome, {currentUser.username}!</h5>
          {/* <button className="button-logout" onClick={logout}>Log Out</button> */}
        </nav>
    );

    

    return (
        <div className='content'> 
            <Link to='/' className='header-link'>  
            <h1 className='logo'>CloundSoud</h1>
            </Link>
            <section className='banner'>
                {currentUser ? personalGreeting(currentUser, logout) : <></>}
                { sessionLinks() }
                <h1>What's next in music is first on CloundSoud</h1>
                <p>Upload your first track and begin your journey. CloundSoud gives you space to create, find your fans, and connect with other artists. </p>
            </section>
            <section className='trending-tracks'>
                <h1>Hear what's trending for free on Cloundsoud</h1>
                <div className='trending-track-container'>
                    <div className='trending-track-item'>
                    </div>
                </div>
            </section>
            <section className='mobile'>
            <div className='mobile-container'>
                <h2>Never stop listening</h2>
                <p>Cloundsoud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</p>
            </div>
            </section>
            <section className='calling'>
            <div className='calling-container'>
                <h2>Calling all creators</h2>
                <p>Get on Cloundsoud to connect with fans, share your sounds, and grow your audience. What are you waiting for? </p>
            </div>
            </section>
            <section className='join'>
                <h2>Thanks for listening. Now join in.</h2>
                <h4>Save tracks, follow artists, and build playlists. All for free.</h4>
                <button className='button-signup' onClick={() => openModal('signup')}>Create Account</button>
                <p>Already have an account?</p>
                <button className='button-login' onClick={() => openModal('login')}>Sign In</button>
            </section>
            <section className='footer'>   
            </section>
        </div>
    );

        
};

export default Splash;