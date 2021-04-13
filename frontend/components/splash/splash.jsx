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
            
            <button className="button-login" onClick={() => loginDemoUser()}>Demo Login</button>
            <br/>
            </nav>
        )

    );

    const personalGreeting = () => (
        // <h5 className="splash-header-message">Welcome, {currentUser.username}!</h5>
        <></>
        
    );

    

    return (
        <div className='splash-content'> 
            <Link to='/' className='header-link'>  
            <h1 className='splash-logo'></h1>
            </Link>
            <div className='splash-topper'></div>
            <section className='splash-banner'>
                {currentUser ? personalGreeting(currentUser, logout) : <></>}
                { sessionLinks() }
                <h1>What's next in music is first on CloundSoud</h1>
                <p>Upload your first track and begin your journey. CloundSoud gives you space to create, find your fans, and connect with other artists. </p>
            </section>
            <section className='splash-trending-tracks'>
                <h1>Hear what's trending for free on Cloundsoud</h1>
                <div className='splash-trending-track-container'>
                    <div className='splash-trending-track-item'>
                        <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.skythings} />
                        <h2>Squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                {/* <button className='discover-button' href='/discover'></button> */}
                </div>
                <button className='discover-button' href='/discover'>Discover</button>
            </section>
            <section className='splash-mobile'>
            <figure />
            <div className='splash-mobile-container'>
                <h2>Never stop listening</h2>
                <p>Cloundsoud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</p>
            </div>
            </section>
            <section className='splash-calling'>
            <div className='splash-calling-container'>
                <h2>Calling all creators</h2>
                <p>Get on Cloundsoud to connect with fans, share your sounds, and grow your audience. What are you waiting for? </p>
            </div>
            </section>
            <section className='splash-join-container'>
                <h2>Thanks for listening. Now join in.</h2>
                <h4>Save tracks, follow artists, and build playlists. All for free.</h4>
                <button className='button-signup' onClick={() => openModal('signup')}>Create Account</button>
                <p>Already have an account? <button className='button-login' onClick={() => openModal('login')}>Sign In</button></p>
            </section>
            <section className='splash-bottom'>   
            
            <span><a href="https://github.com/eismatthew">GitHub</a></span>
            <span><a href="https://www.linkedin.com/in/matthew-eis/">LinkedIn</a></span>
            <p>Language: English (US)</p>
            </section>
        </div>
    );

        
};

export default Splash;