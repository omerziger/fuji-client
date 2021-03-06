import React, { useEffect } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import ProfileIntro from '../components/profile/ProfileIntro.jsx';
import ProfileBar from '../components/profile/ProfileBar.jsx';
import Feed from '../components/feed/Feed.jsx';
import Post from '../components/post/Post.jsx';
import { feedPostsSelector } from '../services/redux/slices/feedSlice/feedSelectors';
import { authStatusSelector } from '../services/redux/slices/authSlice/authSelectors';
import { getPosts } from '../services/redux/slices/feedSlice/feedReducer';
import { getUser } from '../services/redux/slices/profileSlice/profileReducer';
import {
  profileStatusSelector,
  profileUserSelector,
} from '../services/redux/slices/profileSlice/profileSelectors';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import ProfilePlaceholder from '../components/profile/ProfilePlaceholder.jsx';

export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const feedPosts = useSelector((state) => feedPostsSelector(state));
  const authStatus = useSelector((state) => authStatusSelector(state));
  const profileStatus = useSelector((state) => profileStatusSelector(state));
  const profileUser = useSelector((state) => profileUserSelector(state));

  useEffect(() => {
    if (id) dispatch(getPosts(`id-${id}`));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  return authStatus === 'logged' ? (
    <>
      <Header />
      <Grid container direction="column" className={classes.root}>
        {profileStatus === 'success' ? (
          <>
            <ProfileIntro
              profilePic={profileUser.profilePicture}
              username={profileUser.name}
              bio={profileUser.bio}
              id={profileUser._id}
            />
            <ProfileBar id={id} />
            <Feed>
              {!!feedPosts.length ? (
                feedPosts.map((post) => <Post key={post._id} postID={post._id} />)
              ) : (
                <Typography>{`${profileUser.name} haven't posted anything yet`}</Typography>
              )}
            </Feed>
          </>
        ) : (
          <ProfilePlaceholder />
        )}
      </Grid>
      <Footer />
    </>
  ) : (
    <Redirect to="/signin" />
  );
}

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '49px 0',
  },
});
