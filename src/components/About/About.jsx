import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Files
// import heroImage from '../../images/hero.jpg';

const useStyles = makeStyles(() => ({
  aboutSection: {
    // backgroundImage: `url(${heroImage})`,
    background: 'green',
    height: '100vh',
  },
  aboutSectionLeft: {
    background: 'red',
  },
  aboutSectionRight: {
    background: 'yellow',
  },
  aboutSectionName: {
    position: 'absolute',
    fontFamily: 'Lexend Deca, sans-serif',
  },
  aboutSectionFirstName: {
    color: '#ddd',
  },
  aboutSectionLeftRectangle: {
    position: 'absolute',
    background: 'blue',

    width: '50%',
    height: '30%',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.aboutSection} container>
      <Grid className={classes.aboutSectionLeft} item xs={12} sm={6}>
        <h2
          className={`${classes.aboutSectionName} ${classes.aboutSectionFirstName}`}
        >
          PENG
        </h2>
        <h2 className={classes.aboutSectionLastName}>HUANG</h2>
        <div className={classes.aboutSectionLeftRectangle} />
      </Grid>
      <Grid className={classes.aboutSectionRight} item xs={12} sm={6}>
        123123
      </Grid>
    </Grid>
  );
};

export default About;
