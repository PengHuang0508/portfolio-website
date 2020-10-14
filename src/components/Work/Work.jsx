import React from 'react';
// MUI
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
// Files
import projects from '../../variables/projects';
import contentSidebar from '../../images/work-section-content-sidebar.png';

const useStyles = makeStyles((theme) => ({
  workSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: theme.spacing(0, 3),
    overflow: 'hidden',

    backgroundImage: 'linear-gradient(#A8EDEA, #FED6E3)',

    scrollSnapAlign: 'start',
  },
  sectionTitle: {
    fontFamily: 'Montserrat Subrayada, sans-serif',
    fontSize: '17rem',

    lineHeight: '6rem',
    color: 'transparent',
    textStroke: '1px #FFF',

    '&:nth-child(4)': {
      color: '#FFF',
      textStroke: 0,
    },

    [theme.breakpoints.down('lg')]: {
      fontSize: '11rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '8rem',
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '6.5rem',
    },
  },
  workSectionRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  projectContainer: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 1),
    },
  },
  projectCardMedia: {
    maxWidth: 40,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 30,
    },
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    padding: theme.spacing(2, 0),

    textAlign: 'initial',
  },
  projectCardContent: {
    flex: '1 0 40%',
  },
  projectCardActions: {
    flexWrap: 'wrap',

    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const Work = () => {
  const classes = useStyles();

  const WorkSectionTitle = () => (
    <React.Fragment>
      {Array.from(new Array(3)).map((value, index) => (
        <Typography
          key={index}
          className={classes.sectionTitle}
          data-aos='fade-down'
          data-aos-duration={1500 - 500 * index}
          data-aos-easing='ease-in-out'
        >
          WORK
        </Typography>
      ))}
      <Typography
        className={classes.sectionTitle}
        data-aos='fade-right'
        data-aos-duration='700'
        data-aos-easing='ease-in-out'
      >
        WORK
      </Typography>
      {Array.from(new Array(5)).map((value, index) => (
        <Typography
          key={index}
          className={classes.sectionTitle}
          data-aos='fade-up'
          data-aos-offset='-200'
          data-aos-duration={700 + 200 * index}
          data-aos-easing='ease-in-out'
        >
          WORK
        </Typography>
      ))}
    </React.Fragment>
  );

  const ProjectCards = () => (
    <React.Fragment>
      {projects.map((project, index) => (
        <div
          key={index}
          className={classes.projectContainer}
          data-aos='fade-left'
          data-aos-duration={700 + 500 * index}
        >
          <img
            className={classes.projectCardMedia}
            src={contentSidebar}
            alt='work section sidebar'
          />
          <Card>
            <ButtonBase
              className={classes.projectCard}
              onClick={(e) => {
                window.open(project.repository, '_blank');
              }}
            >
              <CardHeader
                action={
                  <IconButton
                    component='a'
                    href={project.repository}
                    target='_blank'
                    aria-label='GitHub Link'
                  >
                    <GitHubIcon />
                  </IconButton>
                }
                title={project.name}
                subheader={project.year}
              />
              <CardContent className={classes.projectCardContent}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.projectCardActions}>
                {project.chips.map((chip, index) => (
                  <Chip
                    key={index}
                    label={chip.label}
                    style={{
                      color: `${chip.textColor}`,
                      backgroundColor: `${chip.backgroundColor}`,
                    }}
                  />
                ))}
              </CardActions>
            </ButtonBase>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );

  return (
    <Grid className={classes.workSection} container>
      <Grid item xs={12} md={6}>
        <WorkSectionTitle />
      </Grid>

      <Grid className={classes.workSectionRight} item xs={12} md={6}>
        <ProjectCards />
      </Grid>
    </Grid>
  );
};

export default Work;
