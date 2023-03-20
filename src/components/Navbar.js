import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: 'auto',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Tabs className={classes.tabs}>
      <Tab label="Home" />
      <Tab label="Projects" />
      <Tab label="Contact" />
    </Tabs>
  );
};

export default Navbar;

