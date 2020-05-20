import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
                <Typography className={classes.title} color="inherit">
                Specialization is for insects
                </Typography>
                <button>
                    <Link to="/">
                    Home
                    </Link>
                </button>
                <button>
                    <Link to="/portfolio">
                    Portfolio
                    </Link>
                </button>
                <button>
                    <Link to="/">
                    top
                    </Link>
                </button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default withRouter(Header)