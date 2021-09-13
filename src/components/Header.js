import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#3f51b5ed'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(16),
    },
    title: {
      flexGrow: 1,
      fontSize: 44,
      fontWeight: 'bold',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    button: {
        marginRight: theme.spacing(4),
        fontSize: 16,
    }
  }));

const Header = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to={'/'} className={classes.link}>React - Redux App </Link>
                    </Typography>
                    <Button color="inherit" className={classes.button}><Link to={'/post'}>Add Post</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
     );
}
 
export default Header;