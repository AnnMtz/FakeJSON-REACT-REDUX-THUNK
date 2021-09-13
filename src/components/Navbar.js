import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    height: 900,
    width: 160,
  },
  menuItem: {
    fontSize: 30,
    fontFamily: 'cursive'
  },
  link: {
    textDecoration: 'none',
    color: '#ce7f32c7',
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem className={classes.menuItem}><Link to={'/'} className={classes.link}>Home</Link></MenuItem>
          <MenuItem className={classes.menuItem}><Link to={'/comments'} className={classes.link}>Comments</Link> </MenuItem>
          <MenuItem className={classes.menuItem}><Link to={'/photos'} className={classes.link}>Photos</Link></MenuItem>
          <MenuItem className={classes.menuItem}><Link to={'/'} className={classes.link}>Posts</Link></MenuItem>
        </MenuList>
      </Paper>
      <div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>Comments</MenuItem>
                    <MenuItem onClick={handleClose}>Photos</MenuItem>
                    <MenuItem onClick={handleClose}>Posts</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
