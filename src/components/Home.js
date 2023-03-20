import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  home: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.home}>
      <Grid item xs={12} className={classes.sectionTitle}>
        <Typography variant="h3">Welcome to my portfolio</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          scelerisque lacus. Nunc finibus elit vel ipsum accumsan commodo.
          Aenean sagittis suscipit felis, sit amet commodo mi posuere at.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
