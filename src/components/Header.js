import React from 'react';
import { AppBar, Toolbar, makeStyles, Button} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'primary',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  link: {
    margin: theme.spacing(1),
    color: '#ffffff',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
      <Button component={RouterLink} to="/" color="inherit" className={classes.link}>
          DriveLux
        </Button>
        <Button component={RouterLink} to="/" color="inherit" className={classes.link}>
          Home
        </Button>
        <Button component={RouterLink} to="/cars" color="inherit" className={classes.link}>
          Cars
        </Button>
        <Button component={RouterLink} to="/reservations" color="inherit" className={classes.link}>
          Reservations
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
