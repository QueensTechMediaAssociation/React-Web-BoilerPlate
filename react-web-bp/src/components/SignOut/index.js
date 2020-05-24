import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <a class="signout-button" type="button" onClick={firebase.signOut}>
    Sign Out
  </a>
);
 
export default withFirebase(SignOutButton);