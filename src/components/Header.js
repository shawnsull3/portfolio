import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} color="secondary">
                  Specialization is for insects
                </Typography>
                <Button component={Link} to={"/"} color="secondary">
                  Home
                </Button>
                <Button component={Link} to={"/about"} color="secondary">
                  About
                </Button>
                <Button component={Link} to={"/portfolio"} color="secondary">
                  Portfolio
                </Button>
                <Button color="secondary">
                  <EmailOutlinedIcon />
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default withRouter(Header)