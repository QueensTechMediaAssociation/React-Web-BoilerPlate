import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import QTMALogo from '../../assets/img/logo.png';

const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  );

const NavigationAuth = () => (
<header>
  <div>
    <nav>
        <ul class="leftNav">
          <li>
            <Link to={ROUTES.LANDING}><img class="headerLogo" src={QTMALogo}/></Link>
          </li>
        </ul>
        <ul class="rightNav">
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
    </nav>
  </div>
</header>
);

const NavigationNonAuth = () => (
<header>
  <div>
    <nav>
        <ul class="leftNav">
          <li>
              <Link to={ROUTES.LANDING}><img class="headerLogo" src={QTMALogo}/></Link>
          </li>
        </ul>
        <ul class="rightNav">
          <li>
            <Link to={ROUTES.LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNUP}>Sign Up</Link>
          </li>
        </ul>
    </nav>
  </div>
</header>
);

export default Navigation;