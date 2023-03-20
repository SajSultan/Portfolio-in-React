import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: '#000',
    color: '#fff',
    height: '80vh',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  heroText: {
    maxWidth: '50%',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.hero}>
      <Grid item xs={12} sm={6} className={classes.heroText}>
        <Typography variant="h1">Hello, I'm Khwaja Sultan</Typography>
        <Typography variant="h4">I'm a Web Developer</Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
