import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

  import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DiscoverContainer from './discover/discover_container';
import TrackIndexContainer from './track_index/track_index_container';
import PlayBarContainer from "./playbar/playbar_container";
import UserIndexContainer from "./user_index/user_index_container";


  const App = () => (
      <div className='app'>
         <PlayBarContainer />
        <Modal />
          <header>
              <Link to='/discover' className='header-link'>
               
                  
              </Link>
          </header>
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <Route exact path='/discover' component={DiscoverContainer} />
            <Route exact path='/tracks/:trackId' component={TrackIndexContainer} />
             <Route exact path="/users/:userId" component={UserIndexContainer} />
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <Redirect to='/'/>
        </Switch>
      </div>
);

export default App;