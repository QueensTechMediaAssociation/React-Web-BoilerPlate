import React from 'react';
import { withAuthorization } from '../Session';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  center: {
    
  }
    
  }));



function Profile() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Grid container justify="center">
        <div>helko</div>
      </Grid>
      <Container maxWidth="lg" className={classes.container}>
      <Card container spacing={2}>
          {/* Recent Orders */}
          
          <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>Q</Avatar>
              <div>Hello World</div>
          </Paper>
      </Card>
      </Container>
  </main>
    );
  }
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Profile);