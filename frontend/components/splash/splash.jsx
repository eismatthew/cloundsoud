import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Splash = ({ currentUser, logout, openModal, loginDemoUser }) => {
    let history = useHistory();

    const demoLogin = () => {
       loginDemoUser().then(() => {
          history.push("/discover")
       })
    }


    const sessionLinks = () => (
        currentUser ? (
            <nav className="splash-login-signup">
                <button className="button-logout" onClick={logout}>Log Out</button>
            </nav>
        ) : (
            <nav className="splash-login-signup">
            <button className='button-login' onClick={() => openModal('login')}>Sign In</button>
            <button className='button-signup' onClick={() => openModal('signup')}>Create Account</button>
            
            <button className="button-login" onClick={() => demoLogin()}>Demo Login</button>
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
                        <h2>squeeda</h2>
                        <h3>sky things</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.mumbai} />
                        <h2>Skrillex</h2>
                        <h3>Mumbai Power</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.medasin} />
                        <h2>Medasin</h2>
                        <h3>Ramen</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.dancin} />
                        <h2>KRONO</h2>
                        <h3>Aaron Smith - Dancin (Krono Remix)</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.danger} />
                        <h2>Deathpact</h2>
                        <h3>Danger</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.jackal} />
                        <h2>Jackal</h2>
                        <h3>Feel It (feat. Anfa Rose)</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.ktn} />
                        <h2>Kill The Noise</h2>
                        <h3>All In My Head (ft. AWOLNATION)</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.bloom} />
                        <h2>MSTRE</h2>
                        <h3>Bloom</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.bullrun} />
                        <h2>Project Paradis</h2>
                        <h3>Bull Run</h3>
                    </div>
                    <div className='splash-trending-track-item'>
                    <img src={window.orbital} />
                        <h2>MSTRE</h2>
                        <h3>Orbital (ft. squeeda)</h3>
                    </div>

                </div>
                <Link to='/discover' className='discover-link'>
                    <button className='discover-button'>Discover</button>
                </Link>
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