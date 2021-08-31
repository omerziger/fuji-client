import React from 'react';
import { Button, Divider, Grid, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setFeed } from '../../../services/redux/slices/feedSlice/feedReducer';
import { currentFeedSelector } from '../../../services/redux/slices/feedSlice/feedSelectors';

export default function FeedControl() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentFeed = useSelector((state) => currentFeedSelector(state));

  const handleFeedClick = (feed) => {
    if (feed === currentFeed) return;
    dispatch(setFeed(feed));
  };

  return (
    <Grid className={classes.root} item xs={12} sm={10} md={9} lg={8} xl={7}>
      <Button
        className={classes.btn}
        color="default"
        onClick={() => handleFeedClick('friends')}
        variant="text"
        style={currentFeed !== 'friends' ? { opacity: 0.5 } : null}
      >
        Friends
      </Button>
      <Button
        className={classes.btn}
        color="default"
        onClick={() => handleFeedClick('community')}
        variant="text"
        style={currentFeed !== 'community' ? { opacity: 0.5 } : null}
      >
        Community
      </Button>
      <Divider className={classes.divider} />
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  btn: {
    background: theme.palette.primary.background.paper,
    marginRight: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.primary.semi}`,
    borderLeft: `1px solid ${theme.palette.primary.semi}`,
    borderRight: `1px solid ${theme.palette.primary.semi}`,
    borderBottomLeftRadius: 'unset',
    borderBottomRightRadius: 'unset',
    transition: 'unset',
  },
  divider: {
    background: theme.palette.primary.semi,
  },
}));
