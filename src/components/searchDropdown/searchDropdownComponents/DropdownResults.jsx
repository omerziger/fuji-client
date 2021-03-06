import React from 'react';
import { Avatar, Divider, makeStyles, Typography } from '@material-ui/core';

export default function DropdownResults(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography
          variant="body1"
          style={{ textAlign: 'center', marginBottom: 4 }}
        >{`${props.length} results`}</Typography>
        <Divider variant="middle" />
      </div>
      {props.results.map((user) => {
        return (
          <div className={classes.user} key={user._id} onClick={() => props.onUserClick(user._id)}>
            <Avatar className={classes.avatar} src={user.profilePicture} />
            <Typography>{user.name}</Typography>
          </div>
        );
      })}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    position: 'sticky',
    zIndex: 5,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    paddingTop: 'none',
    background: theme.palette.primary.background.paper,
  },
  user: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    '&:hover': {
      opacity: 0.7,
    },
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(2),
  },
}));
