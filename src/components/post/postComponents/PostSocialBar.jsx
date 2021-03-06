import React, { useState } from 'react';
import { CardActions, Badge, IconButton, makeStyles, Checkbox } from '@material-ui/core';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';

export default function PostSocialBar(props) {
  const classes = useStyles();
  const [liked, setLiked] = useState(props.liked);

  const onLikeClick = () => {
    setLiked(!liked);
    props.onLikeClick(liked);
  };

  return (
    <CardActions
      className={classes.root}
      style={props.commentsExpanded ? { marginBottom: 12 } : null}
    >
      <Badge className={classes.badge} badgeContent={props.likesCount}>
        <Checkbox
          onClick={onLikeClick}
          className={classes.socialButton}
          icon={<MdFavoriteBorder />}
          checked={liked}
          checkedIcon={<MdFavorite className={classes.checkedLike} />}
        />
      </Badge>
      <Badge className={classes.badge} badgeContent={props.commentsCount}>
        <IconButton className={classes.socialButton} onClick={props.onCommentClick}>
          <FaRegComments />
        </IconButton>
      </Badge>
    </CardActions>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  badge: {
    marginRight: theme.spacing(5),
  },
  socialButton: {
    padding: theme.spacing(1),
  },
  checkedLike: {
    color: '#BC012D',
  },
}));
