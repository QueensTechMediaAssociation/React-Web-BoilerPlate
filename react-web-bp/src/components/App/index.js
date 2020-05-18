import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignupPage from '../Signup';
import LoginPage from '../Login';
import HomePage from '../Home';

import * as ROUTES from '../../constants/routes';


const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGNUP} component={SignupPage} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
        </div>
    </Router>
);

export default App;