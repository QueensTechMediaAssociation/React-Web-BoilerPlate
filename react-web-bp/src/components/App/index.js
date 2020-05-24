import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignupPage from '../Signup';
import LoginPage from '../Login';
import HomePage from '../Home';

import * as ROUTES from '../../constants/routes';
import { app } from 'firebase';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';



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

export default withAuthentication(App);