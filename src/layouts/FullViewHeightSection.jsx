import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  section: {
    height: '100vh',
  },
}));

const FullViewHeightSection = (props) => {
  const classes = useStyles();
  const { component } = props;

  return <div className={classes.section}>{component}</div>;
};

export default FullViewHeightSection;
