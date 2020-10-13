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

    fontFamily: 'Fair Prosper, sans-serif',
    fontSize: '9rem',
    textShadow:
      '0 0 10px, 0 5px 0.5em #09fbd3, 5px 0 0.5em #5b0c6b, 0 0 0.1em #9b33b0, 0 10px 3px #000',

    color: '#fff',
    letterSpacing: '1rem',

    opacity: 0.8,
    transform: 'translate(-50%, -50%)',

    '& span': {
      letterSpacing: '2rem',

      animation: 'neon-blink linear infinite 2s',
    },

    '& span:nth-of-type(2)': {
      animation: 'neon-blink 3s ease-in-out infinite alternate',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
    },
  },
  triangle: {
    position: 'absolute',
    bottom: 10,
    left: '50%',

    width: 0,
    height: 0,

    borderTop: '30px solid #78e8ff',
    borderLeft: '30px solid transparent',
    borderRight: '30px solid transparent',

    transform: 'translate(-50%, -50%)',
    animation: 'hovering 3s ease-in-out infinite',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroSection}>
      <h1 className={classes.heroSectionTitle}>
        H<span>E</span>L<span>L</span>O
      </h1>
      <div className={classes.triangle} />
    </div>
  );
};

export default Hero;
