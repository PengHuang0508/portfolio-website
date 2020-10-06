import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Files
import heroImage from '../../images/hero.jpg';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    height: '100vh',

    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundImage: `linear-gradient( rgba(0,0,0,0.1), rgba(0, 0, 0, 0.4) ),url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  heroSectionTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',

    fontFamily: 'Fair Prosper,sans-serif',
    fontSize: '9rem',
    letterSpacing: '1rem',
    color: '#fff',

    transform: 'translate(-50%, -50%)',
    opacity: 0.8,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroSection}>
      <h1 className={classes.heroSectionTitle}>HELLO</h1>
    </div>
  );
};

export default Hero;
