import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignupPage from '../Signup';
import LoginPage from '../Login';
import HomePage from '../Home';
import ProfilePage from '../Profile'

import * as ROUTES from '../../constants/routes';
import { app } from 'firebase';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';



const App = () => (
    <Router>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LOGIN} component={LandingPage} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.SIGNUP} component={SignupPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.PROFILE} component={ProfilePage} />
    </Router>
);

export default withAuthentication(App);