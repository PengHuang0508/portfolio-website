import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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

    fontFamily: 'Lexend Deca, sans-serif',
  },
  aboutSectionFirstName: {
    fontSize: '9rem',
    color: '#fff',
  },
  aboutSectionLastName: {
    fontSize: '12rem',
    color: 'transparent',
    textStroke: '0.01px #000',
  },
  aboutSectionLeftRectangle: {
    position: 'absolute',

    width: '30%',
    height: '30%',

    backgroundColor: '#53BB94',
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

    width: '20%',
    height: '55%',

    backgroundColor: '#fff',
  },
  textBox: {
    margin: theme.spacing(1, 4),
  },
}));

const About = () => {
  const classes = useStyles();

  const AboutMe = () =>
    basicInformation.map((section, index) => (
      <Box key={index} className={classes.textBox}>
        <Typography variant='h6'>{section.title}</Typography>
        {section.content.map((content, index) => (
          <Typography key={index} variant='subtitle2'>
            {content}
          </Typography>
        ))}
      </Box>
    ));

  return (
    <Grid className={classes.aboutSection} container>
      <Grid className={classes.aboutSectionLeft} item xs={12} sm={6}>
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
      <Grid className={classes.aboutSectionRight} item xs={12} sm={6}>
        <div className={classes.aboutSectionRightRectangle}>
          <AboutMe />
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
