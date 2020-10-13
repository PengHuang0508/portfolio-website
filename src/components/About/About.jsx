import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// Files
import aboutSectionImage from '../../images/about-section.png';
import basicInformation from '../../variables/basicInformation';

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    height: '100%',
  },
  aboutSectionLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutSectionName: {
    position: 'absolute',
    margin: 0,
    fontFamily: 'Lexend Deca, sans-serif',
  },
  aboutSectionFirstName: {
    fontSize: '9rem',
    color: '#fff',

    [theme.breakpoints.down('md')]: {
      fontSize: '5rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  aboutSectionLastName: {
    fontSize: '12rem',
    color: '#000',

    [theme.breakpoints.down('md')]: {
      fontSize: '7rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '5rem',
    },
  },
  aboutSectionLeftRectangle: {
    position: 'absolute',

    width: '30%',
    height: '30%',

    backgroundColor: '#53bb94',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  aboutSectionRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0, 0, 0, 0.4) ),url(${aboutSectionImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  aboutSectionRightRectangle: {
    position: 'absolute',

    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2, 6),

    backgroundColor: '#ddd',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      padding: theme.spacing(3, 0),
    },
  },
  textBox: {
    margin: theme.spacing(2),
    color: '#555',

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
    },
  },
  textBoxTitle: {
    fontStyle: 'italic',
    color: '#e81a62',

    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
}));

const About = () => {
  const classes = useStyles();

  const AboutMe = () =>
    basicInformation.map((section, index) => (
      <div key={index} className={classes.textBox}>
        <Typography className={classes.textBoxTitle} variant='h6'>
          {section.title}
        </Typography>
        {section.content.map((content, index) => (
          <Typography key={index} variant='subtitle2'>
            {content}
          </Typography>
        ))}
      </div>
    ));

  return (
    <Grid className={classes.aboutSection} container>
      <Grid className={classes.aboutSectionLeft} item xs={12} md={6}>
        <div className={classes.aboutSectionLeftRectangle} />
        <h2
          className={`${classes.aboutSectionName} ${classes.aboutSectionLastName}`}
        >
          HUANG
        </h2>
        <h2
          className={`${classes.aboutSectionName} ${classes.aboutSectionFirstName}`}
        >
          PENG
        </h2>
      </Grid>
      <Grid className={classes.aboutSectionRight} item xs={12} md={6}>
        <div className={classes.aboutSectionRightRectangle}>
          <AboutMe />
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
