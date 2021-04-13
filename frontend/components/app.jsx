import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';

  const App = () => (
      <div className='app'>
        <Modal />
          <header>
              <Link to='/' className='header-link'>
               
                  {/* <h1>Cloundsoud</h1> */}
              </Link>
          </header>
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <Redirect to='/'/>
        </Switch>
      </div>
);

export default App;