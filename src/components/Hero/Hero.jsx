import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Files
import heroImage from '../../images/hero.jpg';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    height: '100%',

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
    top: '40%',
    left: '50%',

    fontFamily: 'Fair Prosper,sans-serif',
    fontSize: '9rem',

    color: '#fff',
    letterSpacing: '1rem',

    transform: 'translate(-50%, -50%)',
    opacity: 0.8,
  },
  triangle: {
    position: 'absolute',
    bottom: 10,
    left: '50%',

    width: 0,
    height: 0,

    transform: 'translate(-50%, -50%)',
  },
  outerTriangle: {
    borderTop: '50px solid #fff',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
  },
  innerTriangle: {
    bottom: 12,

    borderBottom: '25px solid #000',
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroSection}>
      <h1 className={classes.heroSectionTitle}>HELLO</h1>
      <div className={`${classes.triangle} ${classes.outerTriangle}`}>
        <div className={`${classes.triangle} ${classes.innerTriangle}`} />
      </div>
    </div>
  );
};

export default Hero;
