import React from 'react';
import { withAuthorization } from '../Session';
import Dashboard from "../dashboard/Dashboard"


const Home = () => (
    <Dashboard/>
);
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Home);