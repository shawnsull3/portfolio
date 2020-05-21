import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    stateImg: {
        maxWidth: '40vw',
        maxHeight: '35vw',
        width: 'auto',
        height: 'auto',
        padding: theme.spacing(1),
    }
}));

const About = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>About me</Paper>
            </Grid>
            <Grid container>
              <Grid
                container
                xs={6}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img className={classes.stateImg} src="https://gisgeography.com/wp-content/uploads/2020/03/Iowa-Outline-Map.jpg" alt="Iowa" />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>A bunch of text in here A bunch of text in here A bunch of text in here A bunch of text in here A bunch of text in here A bunch of text in here A bunch of text in here</Paper>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Paper className={classes.paper}>A bunch of text in here</Paper>
              </Grid>
              <Grid
                container
                xs={6}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img className={classes.stateImg} src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                container
                xs={6}
                direction="column"
                alignItems="center"
                justify="center"
              >
              <img className={classes.stateImg} src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>A bunch of text in here</Paper>
              </Grid>
            </Grid>
        </Grid>
      </div>
    )
}

export default About;
