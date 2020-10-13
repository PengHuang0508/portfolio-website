import React from 'react';
// MUI
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 280,

    color: '#fff',

    backgroundColor: '#000',
  },
  footerTitle: {
    fontSize: '2rem',
    backgroundClip: 'text',
    fillColor: 'transparent',
  },
  divider: {
    width: '90%',
    height: 5,
    margin: theme.spacing(3, 0),

    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  footerIcon: {
    margin: theme.spacing(0, 2),
    fontSize: '2rem',
    color: '#fff',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const links = {
    github: 'https://github.com/PengHuang0508',
    linkedIn: 'https://www.linkedin.com/in/peng-huang-9a8a071a9/',
  };

  return (
    <div className={classes.footer}>
      <Typography className={classes.footerTitle} component='h4'>
        To know more about me
      </Typography>

      <Divider
        className={classes.divider}
        variant='middle'
        data-aos='zoom-in'
      />

      <div>
        <IconButton
          component='a'
          href={links.github}
          target='_blank'
          aria-label='GitHub Link'
        >
          <GitHubIcon className={classes.footerIcon} />
        </IconButton>
        <IconButton
          component='a'
          href={links.linkedIn}
          target='_blank'
          aria-label='LinkedIn Link'
        >
          <LinkedInIcon className={classes.footerIcon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
