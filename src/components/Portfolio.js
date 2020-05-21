import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary.main,
    }
}));

const Portfolio = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Portfolio</Paper>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid container item xs={8}>
              <Grid container xs={4} >
                <Card className={classes.card}>Project XYZ</Card>
              </Grid>
              <Grid container xs={4}>
                <Card className={classes.card}>Project XYZ</Card>
              </Grid>
              <Grid container xs={4}>
                <Card className={classes.card}>Project XYZ</Card>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
      </div>
    )
}

export default Portfolio;
