import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../Firebase/firebase";
import { useHistory, Redirect } from "react-router-dom";
import useStyles from "../../styles/styles";

const theme = createMuiTheme({
  mixins: {
    denseToolbar: {
      minHeight: 40,
    },
  },
});

//When Authenticated
const NavigationAuth = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Toolbar
        variant="dense"
        style={{
          background:
            "linear-gradient(45deg, rgba(0,114,255,1) 0%, rgba(11,141,255,1) 100%)",
        }}
      >
        <Button
          variant="outlined"
          component={Link}
          to={ROUTES.HOME}
          className={classes.menuButton}
        >
          QTMA
        </Button>

        <IconButton
          component={Link}
          to={ROUTES.PROFILE}
          aria-label="show 17 new notifications"
          className={classes.menuButton}
        >
          <AccountCircle />
        </IconButton>
        <SignOutButton />
      </Toolbar>
      <div className={classes.offset} />
    </>
  );
};

// function goHome(props) {
//   const history = useHistory();
//   this.props.history.push(ROUTES.HOME);
// }

//When Not Authenticated
const NavigationNonAuth = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Toolbar
        variant="dense"
        style={{
          background:
            "linear-gradient(45deg, rgba(0,114,255,1) 0%, rgba(11,141,255,1) 100%)",
        }}
      >
        <Typography variant="h5" className={classes.title}>
          QTMA Web App Boiler Plate
        </Typography>
        <Button variant="outlined" component={Link} to={ROUTES.LOGIN}>
          Log In
        </Button>
      </Toolbar>

      <div className={classes.offset} />
    </>
  );
};

export default function Navigation() {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  );
}
