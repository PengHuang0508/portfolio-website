import React from 'react';
// MUI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// Files
import vinylCover from '../../images/vinyl-cover.png';
import vinylRecord from '../../images/vinyl-record.png';

const useStyles = makeStyles((theme) => ({
  vinylContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

    backgroundColor: '#F1F1F1',

    '& > * ': {
      position: 'absolute',
    },
  },
  vinylImage: {
    width: '40%',
    maxWidth: 580,
    height: 'auto',
  },
  vinylRecord: {
    marginLeft: '18%',

    animation: 'spin 35s linear infinite',
  },
  vinylCover: {
    boxShadow: '0 20px 50px #333',
  },
  vinylText: {
    display: 'flex',
    width: '20rem',
    padding: theme.spacing(1, 4),

    fontFamily: 'Times New Roman',
    fontSize: '2rem',

    backgroundColor: 'rgba(255, 255, 255, 0.85)',

    [theme.breakpoints.down('sm')]: {
      width: '10rem',
      padding: theme.spacing(1),
      fontSize: '1rem',
    },

    [theme.breakpoints.down('xs')]: {
      top: '265%',
      left: '30%',
      padding: 0,
      background: 'none',
    },
  },
  vinylCoverText: {
    flex: '1 0 50%',
    textAlign: 'center',

    '&::after': {
      color: '#1b6594',
      content: '"BEAUTIFUL"',

      animation: 'changing-text 9s linear infinite',
    },
  },
}));

const Vinyl = () => {
  const classes = useStyles();

  return (
    <div className={classes.vinylContainer}>
      <img
        className={`${classes.vinylImage} ${classes.vinylRecord}`}
        src={vinylRecord}
        alt='Vinyl Cover'
        data-aos='fade'
      />

      <img
        className={`${classes.vinylImage} ${classes.vinylCover}`}
        src={vinylCover}
        alt='Vinyl Cover'
        data-aos='fade-right'
        data-aos-duration='1000'
      />

      <Typography
        className={classes.vinylText}
        data-aos='zoom-out'
        data-aos-duration='1000'
      >
        LIFE IS <span className={classes.vinylCoverText} />
      </Typography>
    </div>
  );
};

export default Vinyl;
