import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
// Files
import vinylCover from '../../images/vinyl-cover.png';
import vinylRecord from '../../images/vinyl-record.png';
// animation: App-logo-spin infinite 20s linear;

const useStyles = makeStyles((theme) => ({
  vinylContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vinylCover: {
    position: 'absolute',
    left: '22.5%',

    boxShadow: '0 20px 50px #333',
  },
  vinylRecord: {
    position: 'absolute',
    left: '42.5%',
    animation: 'spin infinite 30s linear',
  },
}));

const Vinyl = () => {
  const classes = useStyles();

  return (
    <div className={classes.vinylContainer}>
      <img
        className={classes.vinylRecord}
        src={vinylRecord}
        alt='Vinyl Cover'
        data-aos='fade'
      />

      <img
        className={classes.vinylCover}
        src={vinylCover}
        alt='Vinyl Cover'
        data-aos='fade-right'
      />
    </div>
  );
};

export default Vinyl;
